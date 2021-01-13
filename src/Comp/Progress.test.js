import { shallow } from 'enzyme'
import Progress from './Progress'

describe('Progress bar', () => {
    let progress;
    beforeEach(() => {
        progress = shallow(<Progress />)
    })

    it('has number input box to update progress', () => {
        expect(progress.find('input[name="time"][type="number"]'))
            .toHaveLength(1)
    })
    it('has a button to add minutes', () => {
        expect(progress.find('button[name="addMinutes"]'))
            .toHaveLength(1)
    })
    it('accepts a progress prop and displays that number of minutes', () => {
        const currentProgress = 37;
        progress = shallow(<Progress progress={currentProgress} />)
        expect(progress.text()).toContain(`Your progress: ${currentProgress} minutes`)
    })
    it('Accepts a function updateProgress that updates ' +
        'progress when "Add minutes" button is clicked.', () => {
            const updateProgress = jest.fn()
            progress = shallow(<Progress updateProgress={updateProgress} />)
            progress.find('button[name="addMinutes"]').simulate('click')
            expect(updateProgress).toHaveBeenCalledWith(10)
        })

})