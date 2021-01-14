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
        expect(progress.text()).toContain(`You dedicated: ${currentProgress} minutes`)
    })
    it('accepts a function updateProgress that updates ' +
        'progress when "Add minutes" button is clicked.', () => {
            const updateProgress = jest.fn()
            progress = shallow(<Progress updateProgress={updateProgress} />)
            progress.find('button[name="addMinutes"]').simulate('click')
            expect(updateProgress).toHaveBeenCalledWith(10)
        })
    it('sends number of minutes in input when "Add minutes" button is clicked', () => {
        const updateProgress = jest.fn()
        progress = shallow(<Progress updateProgress={updateProgress} />)
        progress.find('input[name="time"]').simulate('change', { target: { name: 'time', value: 37 } })
        progress.find('button[name="addMinutes"]').simulate('click')
        expect(updateProgress).toHaveBeenCalledWith(37)
    })
})