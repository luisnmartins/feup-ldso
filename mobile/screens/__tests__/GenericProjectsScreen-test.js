import 'react-native';
import React from 'react';
import GenericProjectsScreen from '../GenericProjectsScreen';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

function setup(projects) {

    const initialState = { 
        faculty: {
            loading: false,
            name: 'faup'
        },
        language: {
            selection: 'en'
        }
    };

    const props = {
        projects: projects,
        single: {
            'title': '[EN] Social project at FAUP',
            'short_description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
            'content': '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            'start_date': '2017-01-01',
            'images': [
                'https://picsum.photos/200/300/?random',
                'https://picsum.photos/112/200/?random'
            ],  
            'facultyId': 1
        },
        getAll: jest.fn(),
        getOne: jest.fn()
    };

    const wrapper = shallow(<GenericProjectsScreen {...props} />,
        {
            context: { store: mockStore(initialState) },
            disableLifecycleMethods: false
        });

    return wrapper;
}

it('renders loading screen', () => {

    const projects = [];

    const wrapper = setup(projects);

    expect(wrapper.dive()).toMatchSnapshot();
});

it('renders social projects content', () => {

    const projects = [
        {
            'title': '[EN] Social project at FAUP',
            'short_description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
            'content': '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            'start_date': '2017-01-01',
            'images': [
                'https://picsum.photos/200/300/?random',
                'https://picsum.photos/112/200/?random'
            ],  
            'facultyId': 1
        },
        {
            'title': '[EN] Social project at FAUP',
            'short_description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
            'content': '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            'start_date': '2017-01-01',
            'images': [
                'https://picsum.photos/200/300/?random',
                'https://picsum.photos/112/200/?random'
            ],  
            'facultyId': 1
        }];

    const wrapper = setup(projects);

    expect(wrapper.dive()).toMatchSnapshot();
});

