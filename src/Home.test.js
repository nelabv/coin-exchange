import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import Home from './Home';

it('Should render homepage', () => {
  shallow(<Home />);
});
