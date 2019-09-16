
import { ClientFunction, Selector } from 'testcafe';

// A fixture for each group of tests.
fixture(`Index page`)
  // Load the URL of App.
  .page('http://localhost:8080');

test('The header title is rendered properly', async testController => {
  const paragraphSelector = await new Selector('body .header .app-title');
  await testController.expect(paragraphSelector.innerText.eql('MovieBox'));
});

// TODO : End to End test running with inbuilt serve command is causing issue "stderr maxBuffer exceeded".
// Can't proceed with this for now. WIll go with Run test while server is running approach