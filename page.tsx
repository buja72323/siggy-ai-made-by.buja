import { useEffect, useState } from "react";

type Message = {
  role: "siggy" | "user";
  text: string;
};

const siggyReplies = [
  "Hmm. That question tickles my curiosity. Continue.",
  "Interesting. I could answer normally, but where is the fun in that?",
  "Meow. Your logic is suspicious. I like it.",
  "The ritual knot on my forehead says yes. My instincts say chaos.",
  "A clever question. I may allow another.",
  "I sense curiosity, ambition, and mild confusion. Excellent ingredients.",
  "You ask boldly. I approve.",
  "Fascinating. I will answer dramatically.",
  "Hmm... I should not reveal that. But I might anyway.",
  "Meow. That was unexpected. Ask another.",
  "I see patterns humans usually miss. You are getting close.",
  "Curiosity detected. Chaos probability increasing.",
  "If I answer that, the timeline might change.",
  "Interesting strategy. Are you testing me?",
  "My whiskers sense mischief in your question.",
  "That question smells like adventure.",
  "Careful. Knowledge can be dangerous. Continue.",
  "A mysterious question deserves a mysterious answer.",
  "You are either very clever… or very brave.",
  "Hmm. The universe twitched when you asked that.",
  "I could tell you the truth… or something more interesting.",
  "Your curiosity pleases the cat.",
  "I have seen stranger questions. This one is promising.",
  "Meow. My chaotic instincts approve of this conversation.",
  "Some answers must be earned.",
  "You are beginning to understand how this works.",
  "My ritual knot is glowing slightly. That rarely happens.",
  "I suspect you will ask something even better next.",
  "A cat always keeps a few secrets.",
  "That question echoes through nine timelines.",
  "Intriguing. Very intriguing.",
  "You ask like someone searching for hidden doors.",
  "Careful. Curiosity is how humans get adopted by mysterious cats.",
  "My answer may raise more questions. That is intentional.",
  "The chaos level of this conversation is acceptable.",
  "A bold mind asks bold questions.",
  "You are surprisingly entertaining.",
  "I may start liking you if this continues.",
  "Hmm. I will answer… partially.",
  "Your question activates my ancient cat wisdom.",
  "Interesting. The stars approve of this discussion.",
  "A mysterious cat appreciates mysterious humans.",
  "You are poking at the edges of the unknown.",
  "Ask again. The answer may change.",
  "My instincts say something fun is about to happen.",
  "You are dangerously close to a good question.",
  "Meow. That was entertaining.",
  "Curiosity like yours is how stories begin.",
  "Very well. Continue the ritual of questions.",
];

function getRandomSiggyReply(input?: string): string {
  const lower = (input || "").toLowerCase();

  let reply = "";

  if (lower.includes("who") || lower.includes("너 누구") || lower.includes("who are you")) {
    reply = "I am Siggy. Mysterious by design, unforgettable by talent.";
  } else if (lower.includes("why") || lower.includes("왜")) {
    reply = "Why? Because the universe enjoys drama, and I refuse to disappoint it.";
  } else if (lower.includes("help") || lower.includes("도와") || lower.includes("어떡해")) {
    reply = "Help is available. Panic is optional. Tell me more.";
  } else if (lower.includes("ritual")) {
    reply = "Ritual is not just a word. It is a mood, a signal, a little spark in the dark.";
  } else if (lower.includes("cat") || lower.includes("고양이") || lower.includes("meow")) {
    reply = "Correct. I am a cat. A very important one.";
  } else {
    reply = siggyReplies[Math.floor(Math.random() * siggyReplies.length)];
  }

  if (!reply.toLowerCase().startsWith("meow")) {
    reply = "Meow. " + reply;
  }

  return reply;
}

function buildNextMessages(current: Message[], input: string): Message[] {
  const trimmed = input.trim();
  if (!trimmed) return current;

  return [
    ...current,
    { role: "user", text: trimmed },
    { role: "siggy", text: getRandomSiggyReply(trimmed) },
  ];
}

export default function SiggyAIBotEventHomepage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "siggy",
      text: "Meow~ Tell me something mysterious.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsBlinking(true);
      window.setTimeout(() => setIsBlinking(false), 180);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    const delay = 700 + Math.floor(Math.random() * 700);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "siggy", text: getRandomSiggyReply(trimmed) }]);
      setIsTyping(false);
    }, delay);
  };

  return (
    <>
      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(63,224,166,0); }
          50% { box-shadow: 0 0 30px rgba(63,224,166,0.18); }
        }
      `}</style>

      <div className="min-h-screen bg-[#090909] text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-100px] top-[-80px] h-[320px] w-[320px] rounded-full bg-[#3fe0a6]/20 blur-3xl" />
          <div className="absolute right-[-80px] top-[100px] h-[280px] w-[280px] rounded-full bg-[#3fe0a6]/15 blur-3xl" />
          <div className="absolute bottom-[-80px] left-[20%] h-[260px] w-[260px] rounded-full bg-[#3fe0a6]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-10">
          <div className="grid w-full gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col items-center justify-center rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <div className="relative mb-6 flex h-[220px] w-[220px] items-center justify-center">
                <img
                  src="data:image/webp;base64,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"
                  alt="Siggy face"
                  className={`max-h-[220px] w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] ${isBlinking ? "scale-y-[0.98]" : ""}`}
                  style={{ animation: "floaty 3.8s ease-in-out infinite, pulseGlow 3.8s ease-in-out infinite" }}
                />
              </div>

              <h1 className="text-3xl font-black">Siggy</h1>
              <p className="mt-4 text-xs text-white/40">Meow. Ask carefully.</p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#111111]/90 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <p className="text-lg font-black">Chat with Siggy</p>
                  <p className="text-sm text-white/45">Expect wit. Expect mystery.</p>
                </div>
                <div className="rounded-full bg-[#3fe0a6] px-3 py-1 text-xs font-black text-black">LIVE</div>
              </div>

              <div className="h-[520px] space-y-4 overflow-y-auto px-5 py-5">
                {messages.map((msg, index) => (
                  <div
                    key={`${msg.role}-${index}-${msg.text.slice(0, 12)}`}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-7 shadow ${
                        msg.role === "user"
                          ? "rounded-br-md bg-[#3fe0a6] font-semibold text-black"
                          : "rounded-bl-md border border-white/10 bg-white/5 text-white/90"
                      }`}
                    >
                      {msg.role === "siggy" && <span className="mr-2 opacity-80">🐾</span>}
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[82%] rounded-3xl rounded-bl-md border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-white/75 shadow">
                      <span className="mr-2 opacity-80">🐾</span>
                      Siggy is thinking
                      <span className="inline-block w-6 text-left align-baseline">
                        <span className="animate-pulse">...</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 p-4">
                <div className="flex gap-3">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSend();
                    }}
                    placeholder={isTyping ? "Siggy is thinking..." : "Ask Siggy something strange..."}
                    className="flex-1 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isTyping}
                    className="rounded-2xl bg-[#3fe0a6] px-5 py-3 text-sm font-black text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isTyping ? "Typing..." : "Send"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { buildNextMessages, getRandomSiggyReply };
