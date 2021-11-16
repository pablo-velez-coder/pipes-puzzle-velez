import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import Introduction from "src/pages/Introduction";
import store from "src/redux/store";

describe('test in introduction component',()=>{

    const wrapper = shallow(
        <Provider store={store}>
        <Introduction />
        </Provider>
).dive()

const introPage =  mount(
    <Provider store={store}>
    <Introduction />
    </Provider>)

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('should display texts in the dom', () => {
      const gameTitle = introPage.find('.title').text()
      const callToInput = introPage.find('.input-name').text()
      const input = introPage.find("input[name='name']")
      const button = introPage.find("button[data-id='submit-button']")
        expect(gameTitle).toBe('Pipes Puzzle')
        expect(callToInput).toBe('To begin, tell us your name!')
        expect(input.exists()).toBe(true)
        expect(button.text()).toBe('Go!')
    });

    test('should simulate input a name and succesful submitting', () => {
        const name = 'Pablo'
        const input = introPage.find("input[name='name']")
        const button = introPage.find("button[data-id='submit-button']")
        input.simulate('change',{target:{value: name}})
        button.simulate('submit')

    });
    
    
    
})