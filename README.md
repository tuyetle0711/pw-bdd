1. Install dependencies
   ```
   npm install
   ```

2. Install browsers
   ```
   npx playwright install
   ```

3. Run tests (Khi run test sẽ lưu cache test/ code mới chưa gen ra bdd nên cần phải gen bdd trước, sau đó run test)
   ```
   npx bddgen
   npx playwright test features/demo/data-table.feature
   ```
   ```
   npm test
   ```
   Output:
   ```
   Running 2 tests using 1 worker
   2 passed (2.3s)
   ```
Example project that uses [playwright-bdd](https://github.com/vitalets/playwright-bdd) to run BDD tests.