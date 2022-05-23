import { SetupApplication } from "./app";

class ServerApplication{
    static start(): void {
        const application = new SetupApplication(8081);
        application.init();
        application.start();
    }
}

ServerApplication.start();