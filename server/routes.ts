import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form endpoint (optional/future-proof)
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const message = api.contact.create.input.parse(req.body);
      await storage.createContactMessage(message);
      res.json({ success: true, message: "Message received" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input" });
      } else {
        res.status(500).json({ message: "Server error" });
      }
    }
  });

  return httpServer;
}
