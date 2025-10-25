import { describe, it, expect, vi, beforeEach } from "vitest";
import { Gambler } from "../../../types";
import {
  ZERO_MATCHES_PLAYED,
  FIVE_MATCHES_PLAYED,
  ONE_SEMIFINAL_PLAYED,
  TWO_SEMIFINALS_PLAYED,
  ALL_MATCHES_PLAYED,
} from "./mock-data";

/**
 * Test suite for createRowData function
 *
 * Uses different mock datasets to test various stages of season completion:
 * - ZERO_MATCHES_PLAYED: No matches have been played yet
 * - FIVE_MATCHES_PLAYED: Early season with 5 group matches complete
 * - ONE_SEMIFINAL_PLAYED: All group matches + 1 semifinal complete
 * - TWO_SEMIFINALS_PLAYED: All group matches + both semifinals complete
 * - ALL_MATCHES_PLAYED: Complete season including final
 */

// Team constants for test data
const TEAM_A = "Anders Eldeman & Christoffer Nyqvist";
const TEAM_B = "Ina Lundström & Hanna Hellquist";
const TEAM_C = "Jonas Dahlquist & Marie Lehmann";
const TEAM_D = "Marianne Ahrne & Anders Ankan Johansson";
const TEAM_E = "Julia Frändfors & Oisín Cantwell";
const TEAM_F = "Tarik Saleh & Ika Johannesson";
const TEAM_G = "Johanna Wagrell & Johan Hurtig";
const TEAM_H = "Sofia Dalén & Kalle Möller";
const TEAM_I = "Amie Bramme Sey & Gunnar Bolin";
const TEAM_J = "Kirsty Armstrong & Hanna Lublin Niklasson";
const TEAM_K = "Uje Brandelius & Amy Deasismont";
const TEAM_L = "Messiah Hallberg & Sara Wimmercranz";

describe("createRowData", () => {
  describe("ZERO_MATCHES_PLAYED - No matches have been played", () => {
    beforeEach(async () => {
      vi.resetModules(); // Clear previous mocks
      // Dynamically mock MATCHES with ZERO_MATCHES_PLAYED
      vi.doMock("../../../constants/matches", () => ({
        MATCHES: ZERO_MATCHES_PLAYED,
      }));
    });

    it("should return 0 for all stats when no matches are played", async () => {
      // Re-import after mocking
      const { createRowData } = await import("./createRowData");

      const gambler: Gambler = {
        name: "Test Gambler",
        bets: [
          { matchType: "group", winner: TEAM_A },
          { matchType: "group", winner: TEAM_C },
          { matchType: "group", winner: TEAM_C },
          { matchType: "group", winner: TEAM_D },
          { matchType: "group", winner: TEAM_F },
          { matchType: "group", winner: TEAM_F },
          { matchType: "group", winner: TEAM_G },
          { matchType: "group", winner: TEAM_I },
          { matchType: "group", winner: TEAM_I },
          { matchType: "group", winner: TEAM_J },
          { matchType: "group", winner: TEAM_L },
          { matchType: "group", winner: TEAM_L },
          {
            matchType: "semifinal",
            semifinalFirst: TEAM_A,
            semifinalSecond: TEAM_E,
          },
          { matchType: "final", winner: TEAM_A },
        ],
      };

      const result = createRowData(gambler);

      expect(result.name).toBe("Test Gambler");
      expect(result.matchesPlayed).toBe(0);
      expect(result.wins).toBe(0);
      expect(result.losses).toBe(0);
      expect(result.points).toBe(0);
    });
  });

  describe("FIVE_MATCHES_PLAYED - Early season with 5 group matches", () => {
    beforeEach(async () => {
      vi.resetModules(); // Clear previous mocks
      vi.doMock("../../../constants/matches", () => ({
        MATCHES: FIVE_MATCHES_PLAYED,
      }));
    });

    it("should calculate correct stats when all 5 bets are correct", async () => {
      const { createRowData } = await import("./createRowData");

      const gambler: Gambler = {
        name: "Perfect Early Season",
        bets: [
          { matchType: "group", winner: TEAM_A }, // Correct
          { matchType: "group", winner: TEAM_C }, // Correct
          { matchType: "group", winner: TEAM_C }, // Correct
          { matchType: "group", winner: TEAM_D }, // Correct
          { matchType: "group", winner: TEAM_F }, // Correct
          { matchType: "group", winner: TEAM_F },
          { matchType: "group", winner: TEAM_G },
          { matchType: "group", winner: TEAM_I },
          { matchType: "group", winner: TEAM_I },
          { matchType: "group", winner: TEAM_J },
          { matchType: "group", winner: TEAM_L },
          { matchType: "group", winner: TEAM_L },
          {
            matchType: "semifinal",
            semifinalFirst: TEAM_A,
            semifinalSecond: TEAM_E,
          },
          { matchType: "final", winner: TEAM_A },
        ],
      };

      const result = createRowData(gambler);

      expect(result.matchesPlayed).toBe(5);
      expect(result.wins).toBe(5);
      expect(result.losses).toBe(0);
      expect(result.points).toBe(5); // 5 group matches * 1 point each
    });

    it("should calculate correct stats when 3 out of 5 bets are correct", async () => {
      const { createRowData } = await import("./createRowData");

      const gambler: Gambler = {
        name: "Mixed Results",
        bets: [
          { matchType: "group", winner: TEAM_A }, // Correct
          { matchType: "group", winner: TEAM_D }, // Wrong (actual: TEAM_C)
          { matchType: "group", winner: TEAM_C }, // Correct
          { matchType: "group", winner: TEAM_E }, // Wrong (actual: TEAM_D)
          { matchType: "group", winner: TEAM_F }, // Correct
          { matchType: "group", winner: TEAM_F },
          { matchType: "group", winner: TEAM_G },
          { matchType: "group", winner: TEAM_I },
          { matchType: "group", winner: TEAM_I },
          { matchType: "group", winner: TEAM_J },
          { matchType: "group", winner: TEAM_L },
          { matchType: "group", winner: TEAM_L },
          {
            matchType: "semifinal",
            semifinalFirst: TEAM_A,
            semifinalSecond: TEAM_E,
          },
          { matchType: "final", winner: TEAM_A },
        ],
      };

      const result = createRowData(gambler);

      expect(result.matchesPlayed).toBe(5);
      expect(result.wins).toBe(3);
      expect(result.losses).toBe(2);
      expect(result.points).toBe(3);
    });

    it("should calculate correct stats when all 5 bets are wrong", async () => {
      const { createRowData } = await import("./createRowData");

      const gambler: Gambler = {
        name: "All Wrong",
        bets: [
          { matchType: "group", winner: TEAM_B }, // Wrong (actual: TEAM_A)
          { matchType: "group", winner: TEAM_D }, // Wrong (actual: TEAM_C)
          { matchType: "group", winner: TEAM_B }, // Wrong (actual: TEAM_C)
          { matchType: "group", winner: TEAM_E }, // Wrong (actual: TEAM_D)
          { matchType: "group", winner: TEAM_E }, // Wrong (actual: TEAM_F)
          { matchType: "group", winner: TEAM_F },
          { matchType: "group", winner: TEAM_G },
          { matchType: "group", winner: TEAM_I },
          { matchType: "group", winner: TEAM_I },
          { matchType: "group", winner: TEAM_J },
          { matchType: "group", winner: TEAM_L },
          { matchType: "group", winner: TEAM_L },
          {
            matchType: "semifinal",
            semifinalFirst: TEAM_A,
            semifinalSecond: TEAM_E,
          },
          { matchType: "final", winner: TEAM_A },
        ],
      };

      const result = createRowData(gambler);

      expect(result.matchesPlayed).toBe(5);
      expect(result.wins).toBe(0);
      expect(result.losses).toBe(5);
      expect(result.points).toBe(0);
    });

    it("should calculate correct stats when 1 out of 5 bets is correct", async () => {
      const { createRowData } = await import("./createRowData");

      const gambler: Gambler = {
        name: "One Correct",
        bets: [
          { matchType: "group", winner: TEAM_B }, // Wrong
          { matchType: "group", winner: TEAM_C }, // Correct
          { matchType: "group", winner: TEAM_B }, // Wrong
          { matchType: "group", winner: TEAM_E }, // Wrong
          { matchType: "group", winner: TEAM_E }, // Wrong
          { matchType: "group", winner: TEAM_F },
          { matchType: "group", winner: TEAM_G },
          { matchType: "group", winner: TEAM_I },
          { matchType: "group", winner: TEAM_I },
          { matchType: "group", winner: TEAM_J },
          { matchType: "group", winner: TEAM_L },
          { matchType: "group", winner: TEAM_L },
          {
            matchType: "semifinal",
            semifinalFirst: TEAM_A,
            semifinalSecond: TEAM_E,
          },
          { matchType: "final", winner: TEAM_A },
        ],
      };

      const result = createRowData(gambler);

      expect(result.matchesPlayed).toBe(5);
      expect(result.wins).toBe(1);
      expect(result.losses).toBe(4);
      expect(result.points).toBe(1);
    });
  });

  describe("ONE_SEMIFINAL_PLAYED - All group matches complete, 1 semifinal participant known", () => {
    beforeEach(async () => {
      vi.resetModules();
      vi.doMock("../../../constants/matches", () => ({
        MATCHES: ONE_SEMIFINAL_PLAYED,
      }));
    });

    it("should count all 12 group matches when all are complete", async () => {
      const { createRowData } = await import("./createRowData");

      const gambler: Gambler = {
        name: "All Group Matches Correct",
        bets: [
          { matchType: "group", winner: TEAM_A }, // Correct
          { matchType: "group", winner: TEAM_C }, // Correct
          { matchType: "group", winner: TEAM_C }, // Correct
          { matchType: "group", winner: TEAM_D }, // Correct
          { matchType: "group", winner: TEAM_F }, // Correct
          { matchType: "group", winner: TEAM_F }, // Correct
          { matchType: "group", winner: TEAM_G }, // Correct
          { matchType: "group", winner: TEAM_I }, // Correct
          { matchType: "group", winner: TEAM_I }, // Correct
          { matchType: "group", winner: TEAM_J }, // Correct
          { matchType: "group", winner: TEAM_L }, // Correct
          { matchType: "group", winner: TEAM_L }, // Correct
          {
            matchType: "semifinal",
            semifinalFirst: TEAM_A,
            semifinalSecond: TEAM_E,
          },
          { matchType: "final", winner: TEAM_A },
        ],
      };

      const result = createRowData(gambler);

      expect(result.matchesPlayed).toBe(13); // All 12 group matches + semifinal
      expect(result.wins).toBe(13);
      expect(result.losses).toBe(0);
      expect(result.points).toBe(15); // 12 * 1 point + 3 semifinal points
    });

    it("should calculate mixed results across all 12 group matches", async () => {
      const { createRowData } = await import("./createRowData");

      const gambler: Gambler = {
        name: "Mixed Group Results",
        bets: [
          { matchType: "group", winner: TEAM_A }, // Correct
          { matchType: "group", winner: TEAM_D }, // Wrong
          { matchType: "group", winner: TEAM_C }, // Correct
          { matchType: "group", winner: TEAM_E }, // Wrong
          { matchType: "group", winner: TEAM_F }, // Correct
          { matchType: "group", winner: TEAM_D }, // Wrong
          { matchType: "group", winner: TEAM_G }, // Correct
          { matchType: "group", winner: TEAM_G }, // Wrong
          { matchType: "group", winner: TEAM_I }, // Correct
          { matchType: "group", winner: TEAM_J }, // Correct
          { matchType: "group", winner: TEAM_J }, // Wrong
          { matchType: "group", winner: TEAM_L }, // Correct
          {
            matchType: "semifinal",
            semifinalFirst: TEAM_A,
            semifinalSecond: TEAM_E,
          },
          { matchType: "final", winner: TEAM_A },
        ],
      };

      const result = createRowData(gambler);

      expect(result.matchesPlayed).toBe(13); // All 12 group matches + semifinal
      expect(result.wins).toBe(8);
      expect(result.losses).toBe(5);
      expect(result.points).toBe(10); // 8 * 1 point + 3 semifinal points
    });

    it("should award 3 points when TEAM_A is guessed in semifinalFirst and wins", async () => {
      const { createRowData } = await import("./createRowData");

      const gambler: Gambler = {
        name: "TEAM_A in First Slot",
        bets: [
          { matchType: "group", winner: TEAM_B }, // Wrong
          { matchType: "group", winner: TEAM_D }, // Wrong
          { matchType: "group", winner: TEAM_B }, // Wrong
          { matchType: "group", winner: TEAM_E }, // Wrong
          { matchType: "group", winner: TEAM_E }, // Wrong
          { matchType: "group", winner: TEAM_D }, // Wrong
          { matchType: "group", winner: TEAM_H }, // Wrong
          { matchType: "group", winner: TEAM_G }, // Wrong
          { matchType: "group", winner: TEAM_H }, // Wrong
          { matchType: "group", winner: TEAM_K }, // Wrong
          { matchType: "group", winner: TEAM_J }, // Wrong
          { matchType: "group", winner: TEAM_K }, // Wrong
          {
            matchType: "semifinal",
            semifinalFirst: TEAM_A, // Correct - TEAM_A wins a semifinal
            semifinalSecond: TEAM_E,
          },
          { matchType: "final", winner: TEAM_A },
        ],
      };

      const result = createRowData(gambler);

      expect(result.matchesPlayed).toBe(13); // 12 group + 1 semifinal guess counted
      expect(result.wins).toBe(1); // Only the semifinal guess
      expect(result.losses).toBe(12); // All group matches wrong
      expect(result.points).toBe(3); // 3 points for correct semifinal guess
    });

    it("should award 3 points when TEAM_A is guessed in semifinalSecond and wins", async () => {
      const { createRowData } = await import("./createRowData");

      const gambler: Gambler = {
        name: "TEAM_A in Second Slot",
        bets: [
          { matchType: "group", winner: TEAM_B }, // Wrong
          { matchType: "group", winner: TEAM_D }, // Wrong
          { matchType: "group", winner: TEAM_B }, // Wrong
          { matchType: "group", winner: TEAM_E }, // Wrong
          { matchType: "group", winner: TEAM_E }, // Wrong
          { matchType: "group", winner: TEAM_D }, // Wrong
          { matchType: "group", winner: TEAM_H }, // Wrong
          { matchType: "group", winner: TEAM_G }, // Wrong
          { matchType: "group", winner: TEAM_H }, // Wrong
          { matchType: "group", winner: TEAM_K }, // Wrong
          { matchType: "group", winner: TEAM_J }, // Wrong
          { matchType: "group", winner: TEAM_K }, // Wrong
          {
            matchType: "semifinal",
            semifinalFirst: TEAM_E, // Wrong
            semifinalSecond: TEAM_A, // Correct - TEAM_A wins a semifinal
          },
          { matchType: "final", winner: TEAM_A },
        ],
      };

      const result = createRowData(gambler);

      expect(result.matchesPlayed).toBe(13); // 12 group + 1 semifinal guess counted
      expect(result.wins).toBe(1); // Only the semifinal guess
      expect(result.losses).toBe(12); // All group matches wrong
      expect(result.points).toBe(3); // 3 points for correct semifinal guess
    });
  });
});
