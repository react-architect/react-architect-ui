import * as storybook from '@storybook/react';
import 'storybook-addon-specifications/register';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

// automatically import all files ending in *.stories.tsx in src/components
const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

storybook.configure(loadStories, module);

enzyme.configure({ adapter: new Adapter() });

