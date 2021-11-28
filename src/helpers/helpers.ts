export const monthDecoder = (monthNumber: number | string) => {
    const monthNamesArr: any = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];

    return monthNamesArr[monthNumber] ? monthNamesArr[monthNumber] : '';
};