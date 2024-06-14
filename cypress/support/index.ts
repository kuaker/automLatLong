export { }

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Logs in E2E user
             * @returns void
             */
            getByName(name: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
