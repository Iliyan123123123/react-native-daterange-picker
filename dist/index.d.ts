export default DateRangePicker;
declare function DateRangePicker({ moment, startDate, endDate, onChange, displayedDate, minDate, date, maxDate, range, dayHeaderTextStyle, dayHeaderStyle, backdropStyle, containerStyle, selectedStyle, selectedTextStyle, disabledStyle, dayStyle, dayTextStyle, disabledTextStyle, headerTextStyle, monthButtonsStyle, headerStyle, monthPrevButton, monthNextButton, children, buttonContainerStyle, buttonStyle, buttonTextStyle, presetButtons, open, }: {
    moment: any;
    startDate: any;
    endDate: any;
    onChange: any;
    displayedDate: any;
    minDate: any;
    date: any;
    maxDate: any;
    range: any;
    dayHeaderTextStyle: any;
    dayHeaderStyle: any;
    backdropStyle: any;
    containerStyle: any;
    selectedStyle: any;
    selectedTextStyle: any;
    disabledStyle: any;
    dayStyle: any;
    dayTextStyle: any;
    disabledTextStyle: any;
    headerTextStyle: any;
    monthButtonsStyle: any;
    headerStyle: any;
    monthPrevButton: any;
    monthNextButton: any;
    children: any;
    buttonContainerStyle: any;
    buttonStyle: any;
    buttonTextStyle: any;
    presetButtons: any;
    open: any;
}): any;
declare namespace DateRangePicker {
    namespace defaultProps {
        const dayHeaders: boolean;
        const range: boolean;
        const buttons: boolean;
        const presetButtons: boolean;
    }
    namespace propTypes {
        export const onChange: any;
        export const startDate: any;
        export const endDate: any;
        export const displayedDate: any;
        export const minDate: any;
        export const maxDate: any;
        export const backdropStyle: any;
        export const containerStyle: any;
        export const headerTextStyle: any;
        export const monthButtonsStyle: any;
        export const dayTextStyle: any;
        export const dayStyle: any;
        export const headerStyle: any;
        export const buttonTextStyle: any;
        export const buttonStyle: any;
        export const buttonContainerStyle: any;
        const presetButtons_1: any;
        export { presetButtons_1 as presetButtons };
    }
}
