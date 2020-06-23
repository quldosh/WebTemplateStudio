import { ExtensionCommand } from "../constants";
import { Controller } from "../controller";

export enum GenerationItemStatus {
  Stopped = "Stopped",
  Generating = "Generating",
  Failed = "Failed",
  Success = "Success",
}

export const GENERATION_NAMES = {
  TEMPLATES: "templates",
  APP_SERVICE: "appService",
  COSMOS_DB: "cosmosDB",
};

export const sendToClientGenerationStatus = (name: string, status: string, message?: string) => {
  Controller.reactPanelContext.postMessageWebview({
    command: ExtensionCommand.UpdateGenStatus,
    payload: {
      name,
      status,
      message,
    },
  });
};

export const updateStatusMessage = (message: string) => {
  sendToClientGenerationStatus(GENERATION_NAMES.TEMPLATES, GenerationItemStatus.Generating, message);
};

export const sendToClientGenerationPath = (outputPath: string) => {
  Controller.reactPanelContext.postMessageWebview({
    command: ExtensionCommand.GetOutputPath,
    payload: { outputPath },
  });
};
