import { describe, expect, test } from "bun:test";
import { matchSmallTalkReply } from "./chatReplies";

describe("small-talk matcher", () => {
  test("greetings get a conversational reply, not schemes", () => {
    for (const q of ["hi", "hii", "HI", "Hello", "hey there", "Namaste", "Good morning"]) {
      expect(matchSmallTalkReply(q)).toContain("scheme");
    }
  });

  test("thanks / bye / how-are-you / ok are small talk", () => {
    expect(matchSmallTalkReply("thanks")).not.toBeNull();
    expect(matchSmallTalkReply("thank you!")).not.toBeNull();
    expect(matchSmallTalkReply("bye")).not.toBeNull();
    expect(matchSmallTalkReply("how are you?")).not.toBeNull();
    expect(matchSmallTalkReply("ok")).not.toBeNull();
    expect(matchSmallTalkReply("hmm")).not.toBeNull();
  });

  test("help/who-are-you explains capabilities", () => {
    const reply = matchSmallTalkReply("what can you do");
    expect(reply).toContain("eligibility");
  });

  test("real queries still reach the recommendation engine", () => {
    for (const q of [
      "hi i need a loan for my dairy business",
      "I am 32 years old and want a pension scheme",
      "what schemes are there for street vendors?",
      "hmm, actually I wanted scholarship info",
      "ok so tell me about PM MUDRA",
    ]) {
      expect(matchSmallTalkReply(q)).toBeNull();
    }
  });

  test("long pasted text is never treated as small talk", () => {
    expect(matchSmallTalkReply("hi " + "x".repeat(60))).toBeNull();
  });

  test("empty string is not small talk", () => {
    expect(matchSmallTalkReply("")).toBeNull();
    expect(matchSmallTalkReply("   ")).toBeNull();
  });
});
