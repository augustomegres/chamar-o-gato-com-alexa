import { SkillBuilders } from 'ask-sdk-core'
import { CallCatIntentHandler } from './handlers/callCatIntentHandler'
import { LaunchRequestHandler } from './handlers/launchRequestHandler'

const skillBuilder = SkillBuilders.custom()

export const handler = skillBuilder
  .addRequestHandlers(LaunchRequestHandler, CallCatIntentHandler)
  .lambda()
