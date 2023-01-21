import { RequestHandler, HandlerInput } from 'ask-sdk-core'

export const CallCatIntentHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'CallCatIntent'
    )
  },
  handle(handlerInput: HandlerInput) {
    const speakOutput = 'Chamando a safira...'
    // Reproduzir som de gato aqui
    return handlerInput.responseBuilder.speak(speakOutput).getResponse()
  },
}
