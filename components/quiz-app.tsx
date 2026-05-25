"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Download,
  Flag,
  GraduationCap,
  Home,
  Layers3,
  PlayCircle,
  RefreshCcw,
  Search,
  ShieldCheck,
  Target,
  Timer,
  XCircle,
} from "lucide-react";
import { OptionKey, Question, questions, topics } from "@/lib/questions";
import { summaries } from "@/lib/summaries";

type View = "home" | "quiz" | "result" | "materials" | "bank";
type SessionMode = "latihan" | "simulasi" | "topik";
type AnswerMap = Record<number, OptionKey | undefined>;

type Session = {
  mode: SessionMode;
  title: string;
  subtitle: string;
  items: Question[];
  instantReview: boolean;
  timed: boolean;
};

const EXAM_SECONDS = 45 * 60;

function shuffle<T>(data: T[]): T[] {
  const result = [...data];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function formatTime(seconds: number) {
  const safe = Math.max(0, seconds);
  const min = Math.floor(safe / 60).toString().padStart(2, "0");
  const sec = (safe % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}

function scoreLabel(score: number) {
  if (score >= 85) return "Sangat siap menghadapi UAS";
  if (score >= 70) return "Sudah baik, perkuat topik yang lemah";
  if (score >= 55) return "Cukup, tetapi perlu latihan ulang";
  return "Ulangi ringkasan materi dan latihan bertahap";
}

function badgeColor(topic: string) {
  const map: Record<string, string> = {
    "Pengantar & Smart City": "badge-blue",
    "Masalah, Ideasi & Value Proposition": "badge-teal",
    "Business Model Canvas": "badge-purple",
    "Pasar & Model Digital": "badge-amber",
    "Teknologi Smart City": "badge-cyan",
    "MVP & Validasi": "badge-green",
    "Etika & Legal": "badge-rose",
    "Pendanaan & Skalabilitas": "badge-orange",
    Pitching: "badge-indigo",
  };
  return map[topic] ?? "badge-blue";
}

export function QuizApp() {
  const [view, setView] = useState<View>("home");
  const [session, setSession] = useState<Session | null>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(EXAM_SECONDS);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [reviewFilter, setReviewFilter] = useState<"semua" | "salah" | "benar">("semua");
  const [bankQuery, setBankQuery] = useState("");
  const [bankTopic, setBankTopic] = useState("Semua topik");
  const [bankOpen, setBankOpen] = useState<Set<number>>(new Set());
  const timerCounter = useRef(EXAM_SECONDS);

  useEffect(() => {
    if (view !== "quiz" || !session?.timed) return;
    const tick = window.setInterval(() => {
      timerCounter.current = Math.max(0, timerCounter.current - 1);
      setTimeLeft(timerCounter.current);
      if (timerCounter.current === 0) {
        window.clearInterval(tick);
        setView("result");
      }
    }, 1000);
    return () => window.clearInterval(tick);
  }, [view, session?.timed]);

  const activeQuestion = session?.items[current];
  const answeredCount = session ? session.items.filter((q) => answers[q.id]).length : 0;
  const progress = session ? Math.round((answeredCount / session.items.length) * 100) : 0;

  const result = useMemo(() => {
    if (!session) return null;
    const correct = session.items.filter((question) => answers[question.id] === question.answer).length;
    const wrong = session.items.filter((question) => answers[question.id] && answers[question.id] !== question.answer).length;
    const blank = session.items.length - correct - wrong;
    const percentage = Math.round((correct / session.items.length) * 100);
    const byTopic = Array.from(new Set(session.items.map((question) => question.topic))).map((topic) => {
      const list = session.items.filter((question) => question.topic === topic);
      const topicCorrect = list.filter((question) => answers[question.id] === question.answer).length;
      return { topic, total: list.length, correct: topicCorrect, score: Math.round((topicCorrect / list.length) * 100) };
    });
    return { correct, wrong, blank, percentage, byTopic };
  }, [answers, session]);

  const reviewItems = useMemo(() => {
    if (!session) return [];
    if (reviewFilter === "benar") return session.items.filter((q) => answers[q.id] === q.answer);
    if (reviewFilter === "salah") return session.items.filter((q) => answers[q.id] !== q.answer);
    return session.items;
  }, [answers, reviewFilter, session]);

  const visibleBank = useMemo(() => {
    const keyword = bankQuery.toLowerCase().trim();
    return questions.filter((question) => {
      const matchTopic = bankTopic === "Semua topik" || question.topic === bankTopic;
      const matchText = !keyword || question.question.toLowerCase().includes(keyword) || question.competency.toLowerCase().includes(keyword);
      return matchTopic && matchText;
    });
  }, [bankQuery, bankTopic]);

  function resetSession(next: Session) {
    setSession(next);
    setAnswers({});
    setRevealed(new Set());
    setFlagged(new Set());
    setCurrent(0);
    setReviewFilter("semua");
    timerCounter.current = next.timed ? EXAM_SECONDS : 0;
    setTimeLeft(timerCounter.current);
    setView("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startLatihan() {
    resetSession({
      mode: "latihan",
      title: "Latihan Lengkap 50 Soal",
      subtitle: "Jawaban dan pembahasan terbuka setelah memilih opsi.",
      items: questions,
      instantReview: true,
      timed: false,
    });
  }

  function startSimulation() {
    resetSession({
      mode: "simulasi",
      title: "Simulasi UAS 40 Soal",
      subtitle: "Soal acak, 45 menit, jawaban dibuka setelah dikumpulkan.",
      items: shuffle(questions).slice(0, 40),
      instantReview: false,
      timed: true,
    });
  }

  function startTopicPractice() {
    const topicItems = questions.filter((question) => question.topic === selectedTopic);
    resetSession({
      mode: "topik",
      title: `Fokus: ${selectedTopic}`,
      subtitle: `${topicItems.length} soal dengan pembahasan langsung untuk memperkuat satu materi.`,
      items: topicItems,
      instantReview: true,
      timed: false,
    });
  }

  function selectAnswer(key: OptionKey) {
    if (!session || !activeQuestion) return;
    if (session.instantReview && revealed.has(activeQuestion.id)) return;
    setAnswers((currentAnswers) => ({ ...currentAnswers, [activeQuestion.id]: key }));
    if (session.instantReview) {
      setRevealed((currentRevealed) => new Set(currentRevealed).add(activeQuestion.id));
    }
  }

  function toggleFlag() {
    if (!activeQuestion) return;
    setFlagged((items) => {
      const next = new Set(items);
      if (next.has(activeQuestion.id)) next.delete(activeQuestion.id);
      else next.add(activeQuestion.id);
      return next;
    });
  }

  function toggleBankAnswer(id: number) {
    setBankOpen((items) => {
      const next = new Set(items);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function navigate(next: View) {
    setView(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen">
      <Header view={view} onNavigate={navigate} />
      {view === "home" && (
        <HomeView
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          onStartLatihan={startLatihan}
          onStartSimulation={startSimulation}
          onStartTopic={startTopicPractice}
          onOpenMaterials={() => navigate("materials")}
          onOpenBank={() => navigate("bank")}
        />
      )}
      {view === "quiz" && session && activeQuestion && (
        <QuizView
          session={session}
          activeQuestion={activeQuestion}
          current={current}
          answers={answers}
          revealed={revealed}
          flagged={flagged}
          answeredCount={answeredCount}
          progress={progress}
          timeLeft={timeLeft}
          onSelect={selectAnswer}
          onFlag={toggleFlag}
          onJump={setCurrent}
          onPrevious={() => setCurrent((index) => Math.max(0, index - 1))}
          onNext={() => setCurrent((index) => Math.min(session.items.length - 1, index + 1))}
          onSubmit={() => setView("result")}
          onExit={() => navigate("home")}
        />
      )}
      {view === "result" && session && result && (
        <ResultView
          session={session}
          answers={answers}
          result={result}
          reviewFilter={reviewFilter}
          reviewItems={reviewItems}
          setReviewFilter={setReviewFilter}
          onRestart={() => (session.mode === "simulasi" ? startSimulation() : session.mode === "latihan" ? startLatihan() : startTopicPractice())}
          onHome={() => navigate("home")}
        />
      )}
      {view === "materials" && <MaterialsView onPractice={startLatihan} />}
      {view === "bank" && (
        <BankView
          items={visibleBank}
          topic={bankTopic}
          query={bankQuery}
          open={bankOpen}
          onTopic={setBankTopic}
          onQuery={setBankQuery}
          onToggle={toggleBankAnswer}
          onPractice={startLatihan}
        />
      )}
    </main>
  );
}

function Header({ view, onNavigate }: { view: View; onNavigate: (view: View) => void }) {
  return (
    <header className="site-header">
      <div className="container header-row">
        <button className="brand" onClick={() => onNavigate("home")} aria-label="Ke halaman beranda">
          <span className="brand-mark"><GraduationCap size={20} /></span>
          <span><strong>TechnoSprint</strong><small>UAS Practice</small></span>
        </button>
        <nav className="nav" aria-label="Navigasi utama">
          <button className={view === "home" ? "active" : ""} onClick={() => onNavigate("home")}><Home size={16} /> Beranda</button>
          <button className={view === "materials" ? "active" : ""} onClick={() => onNavigate("materials")}><BookOpen size={16} /> Ringkasan</button>
          <button className={view === "bank" ? "active" : ""} onClick={() => onNavigate("bank")}><Layers3 size={16} /> Bank Soal</button>
        </nav>
      </div>
    </header>
  );
}

function HomeView({
  selectedTopic,
  setSelectedTopic,
  onStartLatihan,
  onStartSimulation,
  onStartTopic,
  onOpenMaterials,
  onOpenBank,
}: {
  selectedTopic: string;
  setSelectedTopic: (topic: string) => void;
  onStartLatihan: () => void;
  onStartSimulation: () => void;
  onStartTopic: () => void;
  onOpenMaterials: () => void;
  onOpenBank: () => void;
}) {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow"><ShieldCheck size={16} /> Persiapan UAS Technopreneurship</p>
            <h1>Latihan UAS <span>Smart City & Technopreneurship</span> yang terasa seperti soal asli.</h1>
            <p className="hero-copy">
              Bank 60 soal pilihan ganda berbasis studi kasus, pembahasan jawaban, dan simulasi 40 soal acak untuk pola ujian gabungan kelas.
            </p>
            <div className="hero-actions">
              <button className="btn primary" onClick={onStartSimulation}><Timer size={18} /> Mulai Simulasi 40 Soal</button>
              <button className="btn secondary" onClick={onStartLatihan}><PlayCircle size={18} /> Latihan Lengkap 50 Soal</button>
            </div>
            <div className="stat-row">
              <MiniStat value="50" label="Bank soal" />
              <MiniStat value="40" label="Format simulasi" />
              <MiniStat value="8+" label="Materi utama" />
              <MiniStat value="45m" label="Timer simulasi" />
            </div>
          </div>
          <div className="exam-card">
            <div className="exam-card-head">
              <span className="pill">UAS Mode</span>
              <span className="muted"><Clock3 size={15} /> 45:00</span>
            </div>
            <h2>Kisi-kisi fokus belajar</h2>
            {[
              "BMC, value proposition, TAM/SAM/SOM",
              "Smart City architecture & interoperability",
              "MVP, prototyping, validation, product-market fit",
              "Ethics, UU PDP, funding, scalability, pitching",
            ].map((item, index) => (
              <div className="focus-row" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <CheckCircle2 size={17} />
              </div>
            ))}
            <p className="tip"><BrainCircuit size={17} /> Opsi pengecoh biasanya terlalu fokus pada teknologi, tanpa masalah pengguna atau keberlanjutan bisnis.</p>
          </div>
        </div>
      </section>

      <section className="container section-grid">
        <div className="panel focus-panel">
          <div className="section-title">
            <div><p className="overline">BELAJAR TERARAH</p><h2>Fokus satu materi dahulu</h2></div>
            <Target size={25} />
          </div>
          <label className="field-label" htmlFor="topic">Pilih topik latihan</label>
          <select id="topic" value={selectedTopic} onChange={(event) => setSelectedTopic(event.target.value)}>
            {topics.map((topic) => <option key={topic}>{topic}</option>)}
          </select>
          <button className="btn primary wide" onClick={onStartTopic}>Latihan Topik Terpilih <ArrowRight size={17} /></button>
        </div>
        <FeatureCard icon={<BookOpen size={22} />} title="Ringkasan Materi" text="Baca konsep inti dan pola menjawab sebelum mulai mengerjakan." button="Buka Ringkasan" onClick={onOpenMaterials} />
        <FeatureCard icon={<ClipboardCheck size={22} />} title="Bank Soal & Kunci" text="Lihat seluruh 60 soal, kunci jawaban, serta alasan jawaban benar." button="Lihat Bank Soal" onClick={onOpenBank} />
      </section>
    </>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return <div className="mini-stat"><strong>{value}</strong><span>{label}</span></div>;
}

function FeatureCard({ icon, title, text, button, onClick }: { icon: React.ReactNode; title: string; text: string; button: string; onClick: () => void }) {
  return (
    <div className="panel feature-card">
      <span className="feature-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="text-button" onClick={onClick}>{button} <ArrowRight size={16} /></button>
    </div>
  );
}

function QuizView({
  session,
  activeQuestion,
  current,
  answers,
  revealed,
  flagged,
  answeredCount,
  progress,
  timeLeft,
  onSelect,
  onFlag,
  onJump,
  onPrevious,
  onNext,
  onSubmit,
  onExit,
}: {
  session: Session;
  activeQuestion: Question;
  current: number;
  answers: AnswerMap;
  revealed: Set<number>;
  flagged: Set<number>;
  answeredCount: number;
  progress: number;
  timeLeft: number;
  onSelect: (key: OptionKey) => void;
  onFlag: () => void;
  onJump: (index: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onExit: () => void;
}) {
  const showFeedback = session.instantReview && revealed.has(activeQuestion.id);
  const selected = answers[activeQuestion.id];
  const isLast = current === session.items.length - 1;
  return (
    <section className="quiz-shell container">
      <div className="quiz-top">
        <div>
          <button className="back-link" onClick={onExit}><ArrowLeft size={16} /> Kembali</button>
          <h1>{session.title}</h1>
          <p>{session.subtitle}</p>
        </div>
        {session.timed && <div className={`timer ${timeLeft < 300 ? "warning" : ""}`}><Clock3 size={19} /> {formatTime(timeLeft)}</div>}
      </div>
      <div className="progress-wrap">
        <div className="progress-info"><span>{answeredCount} dari {session.items.length} dijawab</span><strong>{progress}%</strong></div>
        <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
      </div>
      <div className="quiz-grid">
        <aside className="navigator panel">
          <h2>Navigasi soal</h2>
          <div className="number-grid">
            {session.items.map((question, index) => {
              const answered = Boolean(answers[question.id]);
              const isCurrent = index === current;
              return (
                <button key={question.id} className={`${isCurrent ? "current" : ""} ${answered ? "answered" : ""} ${flagged.has(question.id) ? "marked" : ""}`} onClick={() => onJump(index)}>
                  {index + 1}
                </button>
              );
            })}
          </div>
          <div className="legend"><span><i className="dot answered" /> Terjawab</span><span><i className="dot marked" /> Ditandai</span></div>
          <button className="btn submit wide" onClick={onSubmit}>Kumpulkan Jawaban</button>
        </aside>
        <article className="question-card panel">
          <div className="question-meta">
            <span className={`topic-badge ${badgeColor(activeQuestion.topic)}`}>{activeQuestion.topic}</span>
            <span className="difficulty">{activeQuestion.difficulty}</span>
            <button className={`flag ${flagged.has(activeQuestion.id) ? "active" : ""}`} onClick={onFlag}><Flag size={16} /> Tandai</button>
          </div>
          <p className="question-number">Pertanyaan {current + 1} dari {session.items.length}</p>
          <h2>{activeQuestion.question}</h2>
          <div className="options">
            {activeQuestion.options.map((option) => {
              const chosen = selected === option.key;
              const correct = option.key === activeQuestion.answer;
              const style = showFeedback ? (correct ? "correct" : chosen ? "wrong" : "") : chosen ? "selected" : "";
              return (
                <button key={option.key} className={`option ${style}`} onClick={() => onSelect(option.key)}>
                  <span className="option-key">{option.key}</span>
                  <span>{option.text}</span>
                  {showFeedback && correct && <CheckCircle2 className="status-icon" size={21} />}
                  {showFeedback && chosen && !correct && <XCircle className="status-icon" size={21} />}
                </button>
              );
            })}
          </div>
          {showFeedback && (
            <div className="explanation">
              <strong>{selected === activeQuestion.answer ? "Jawaban benar" : `Jawaban benar: ${activeQuestion.answer}`}</strong>
              <p>{activeQuestion.explanation}</p>
            </div>
          )}
          <div className="question-actions">
            <button className="btn secondary" onClick={onPrevious} disabled={current === 0}><ArrowLeft size={17} /> Sebelumnya</button>
            {isLast ? (
              <button className="btn primary" onClick={onSubmit}>Selesai & Lihat Nilai <ClipboardCheck size={17} /></button>
            ) : (
              <button className="btn primary" onClick={onNext}>Selanjutnya <ArrowRight size={17} /></button>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

function ResultView({
  session,
  answers,
  result,
  reviewFilter,
  reviewItems,
  setReviewFilter,
  onRestart,
  onHome,
}: {
  session: Session;
  answers: AnswerMap;
  result: { correct: number; wrong: number; blank: number; percentage: number; byTopic: { topic: string; total: number; correct: number; score: number }[] };
  reviewFilter: "semua" | "salah" | "benar";
  reviewItems: Question[];
  setReviewFilter: (filter: "semua" | "salah" | "benar") => void;
  onRestart: () => void;
  onHome: () => void;
}) {
  return (
    <section className="container result-shell">
      <div className="result-hero panel">
        <div className="score-ring" style={{ background: `conic-gradient(var(--primary) 0 ${result.percentage * 3.6}deg, #e5edff ${result.percentage * 3.6}deg 360deg)` }}><strong>{result.percentage}</strong><span>Nilai</span></div>
        <div>
          <p className="overline">HASIL {session.title.toUpperCase()}</p>
          <h1>{scoreLabel(result.percentage)}</h1>
          <p>Gunakan analisis per materi di bawah untuk menentukan bagian yang harus diulang sebelum ujian.</p>
          <div className="hero-actions compact">
            <button className="btn primary" onClick={onRestart}><RefreshCcw size={17} /> Ulangi</button>
            <button className="btn secondary" onClick={onHome}><Home size={17} /> Beranda</button>
          </div>
        </div>
      </div>
      <div className="result-stats">
        <ResultStat icon={<CheckCircle2 />} value={result.correct} label="Benar" className="good" />
        <ResultStat icon={<XCircle />} value={result.wrong} label="Salah" className="bad" />
        <ResultStat icon={<ClipboardCheck />} value={result.blank} label="Kosong" className="neutral" />
        <ResultStat icon={<BarChart3 />} value={`${result.percentage}%`} label="Akurasi" className="info" />
      </div>
      <div className="result-grid">
        <div className="panel analysis">
          <div className="section-title"><h2>Analisis per materi</h2><BarChart3 size={20} /></div>
          {result.byTopic.map((topic) => (
            <div className="topic-result" key={topic.topic}>
              <div><span>{topic.topic}</span><strong>{topic.correct}/{topic.total} benar</strong></div>
              <div className="meter"><span style={{ width: `${topic.score}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="panel recommendation">
          <h2>Strategi belajar berikutnya</h2>
          <p>Prioritaskan materi dengan skor terendah, lalu ulangi latihan fokus topik sampai alasan jawabannya dapat kamu jelaskan sendiri.</p>
          <ul>
            {[...result.byTopic].sort((a, b) => a.score - b.score).slice(0, 3).map((topic) => (
              <li key={topic.topic}><Target size={16} /> {topic.topic}: {topic.score}%</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="panel review">
        <div className="review-head">
          <div><p className="overline">PEMBAHASAN</p><h2>Review jawaban</h2></div>
          <div className="filters">
            {(["semua", "salah", "benar"] as const).map((filter) => (
              <button key={filter} className={reviewFilter === filter ? "active" : ""} onClick={() => setReviewFilter(filter)}>{filter}</button>
            ))}
          </div>
        </div>
        {reviewItems.map((question) => {
          const userAnswer = answers[question.id];
          const correct = userAnswer === question.answer;
          return (
            <article className="review-item" key={question.id}>
              <div className="review-question"><span className={correct ? "correct-icon" : "wrong-icon"}>{correct ? <CheckCircle2 size={19} /> : <XCircle size={19} />}</span><div><small>{question.topic}</small><h3>{question.id}. {question.question}</h3></div></div>
              <p className="answer-line">Jawaban kamu: <strong>{userAnswer ?? "Tidak dijawab"}</strong> <span>Jawaban benar: <strong>{question.answer}</strong></span></p>
              <p className="review-explain">{question.explanation}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ResultStat({ icon, value, label, className }: { icon: React.ReactNode; value: number | string; label: string; className: string }) {
  return <div className={`panel result-stat ${className}`}><span>{icon}</span><strong>{value}</strong><small>{label}</small></div>;
}

function MaterialsView({ onPractice }: { onPractice: () => void }) {
  return (
    <section className="container content-page">
      <div className="page-heading">
        <p className="eyebrow"><BookOpen size={16} /> Ringkasan cepat</p>
        <h1>Konsep yang paling sering menjadi inti soal</h1>
        <p>Gunakan halaman ini sebagai penguatan sebelum mengerjakan mode simulasi. Fokuslah pada logika jawaban, bukan menghafal huruf.</p>
        <button className="btn primary" onClick={onPractice}><PlayCircle size={18} /> Kerjakan 50 Soal</button>
      </div>
      <div className="summary-grid">
        {summaries.map((summary, index) => (
          <article className="summary-card panel" key={summary.title}>
            <span className="summary-number">{String(index + 1).padStart(2, "0")}</span>
            <h2>{summary.title}</h2>
            <p>{summary.text}</p>
            <div className="keyword-row">{summary.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
          </article>
        ))}
      </div>
      <article className="panel source-card">
        <div className="section-title"><h2>Dasar penyusunan latihan</h2><ShieldCheck size={21} /></div>
        <p>Bank soal disusun dari pola soal UAS yang diberikan, lalu diperkuat dengan konsep referensi publik untuk menjaga konsistensi istilah.</p>
        <div className="sources">
          <a href="https://www.strategyzer.com/library/the-business-model-canvas" target="_blank" rel="noreferrer">Strategyzer — Business Model Canvas</a>
          <a href="https://www.nist.gov/smart-cities" target="_blank" rel="noreferrer">NIST — Smart Cities and Communities Framework</a>
          <a href="https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022" target="_blank" rel="noreferrer">BPK RI — UU No. 27 Tahun 2022 tentang PDP</a>
        </div>
      </article>
    </section>
  );
}

function BankView({
  items,
  topic,
  query,
  open,
  onTopic,
  onQuery,
  onToggle,
  onPractice,
}: {
  items: Question[];
  topic: string;
  query: string;
  open: Set<number>;
  onTopic: (topic: string) => void;
  onQuery: (query: string) => void;
  onToggle: (id: number) => void;
  onPractice: () => void;
}) {
  return (
    <section className="container content-page bank-page">
      <div className="page-heading bank-heading">
        <p className="eyebrow"><ClipboardCheck size={16} /> Bank soal lengkap</p>
        <h1>50 Soal Pilihan Ganda dan Pembahasan</h1>
        <p>Soal dibuat dalam bahasa Inggris mengikuti contoh ujian, sedangkan pembahasan ditulis dalam bahasa Indonesia agar lebih mudah dipahami.</p>
        <div className="hero-actions compact">
          <button className="btn primary" onClick={onPractice}><PlayCircle size={18} /> Mulai Latihan</button>
          <a className="btn secondary" href="/bank-soal.json" download><Download size={18} /> Unduh JSON</a>
        </div>
      </div>
      <div className="bank-toolbar panel">
        <label className="search-field"><Search size={18} /><input value={query} onChange={(event) => onQuery(event.target.value)} placeholder="Cari kata kunci soal atau kompetensi" /></label>
        <select value={topic} onChange={(event) => onTopic(event.target.value)}>
          <option>Semua topik</option>
          {topics.map((item) => <option key={item}>{item}</option>)}
        </select>
        <strong>{items.length} soal</strong>
      </div>
      <div className="bank-list">
        {items.map((question) => (
          <article className="panel bank-item" key={question.id}>
            <button className="bank-toggle" onClick={() => onToggle(question.id)}>
              <span className="bank-id">{String(question.id).padStart(2, "0")}</span>
              <span className="bank-content">
                <small className={`topic-badge ${badgeColor(question.topic)}`}>{question.topic}</small>
                <strong>{question.question}</strong>
              </span>
              <ChevronDown className={open.has(question.id) ? "rotate" : ""} size={19} />
            </button>
            {open.has(question.id) && (
              <div className="bank-answer">
                {question.options.map((option) => <p key={option.key} className={option.key === question.answer ? "answer-correct" : ""}><b>{option.key}.</b> {option.text}</p>)}
                <div className="explanation"><strong>Kunci: {question.answer}</strong><p>{question.explanation}</p></div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
