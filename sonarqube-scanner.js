// eslint-disable-next-line @typescript-eslint/no-var-requires
const scanner = require('sonarqube-scanner');

console.log(process.env.SONAR_SERVER_URL);

const options = {
  serverUrl: process.env.SONAR_SERVER_URL,
  login: process.env.SONAR_USER,
  password: process.env.SONAR_PASSWORD,
  options: {
    'sonar.sources': './src',
    'sonar.exclusions': '**/*.spec.ts',
    'sonar.tests': './src',
    'sonar.test.inclusions': '**/*.spec.ts',
    'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
    'sonar.testExecutionReportPaths': 'test-report.xml',
  },
};

scanner(options, () => process.exit());
