// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { zodBuffer } from "@app/lib/zod";

import { TImmutableDBKeys } from "./models";

export const SlackIntegrationsSchema = z.object({
  id: z.string().uuid(),
  projectId: z.string(),
  teamId: z.string(),
  teamName: z.string(),
  slackUserId: z.string(),
  slackAppId: z.string(),
  encryptedBotAccessToken: zodBuffer,
  slackBotId: z.string(),
  slackBotUserId: z.string(),
  isAccessRequestNotificationEnabled: z.boolean().default(false),
  accessRequestChannels: z.string().default(""),
  isSecretRequestNotificationEnabled: z.boolean().default(false),
  secretRequestChannels: z.string().default(""),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TSlackIntegrations = z.infer<typeof SlackIntegrationsSchema>;
export type TSlackIntegrationsInsert = Omit<z.input<typeof SlackIntegrationsSchema>, TImmutableDBKeys>;
export type TSlackIntegrationsUpdate = Partial<Omit<z.input<typeof SlackIntegrationsSchema>, TImmutableDBKeys>>;
