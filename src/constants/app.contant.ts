const TIMEOUT_SECONDS = 50000;

export class AppConstant {
    /**
     * @exports
     * @class AppConstant
     * @component
     */
    public static DEFAULT_ERROR_MESSAGES = {
        GENERIC: 'Something went wrong',
    };

    public static LOADER_DEFAULT_LABEL = 'Loading...';

    public static IS_LOGGER_ENABLED = true;

    public static TIMEOUT_MS = TIMEOUT_SECONDS;

    public static TIMEOUT_MESSAGE = 'Request timeout';

    public static IS_PROFILER_ENABLED = true;

    public static BASE_URL = 'https://reqres.in/api';
}
