class AlarmClock {
    constructor() {

        //память объекта
        this.alarmCollection = [];
        this.intervalId = null;
    }


    addClock(time, callback) {
        //Проверка 
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        //есть ли звонок в это же время
        const existingAlarm = this.alarmCollection.find(alarm => alarm.time === time);
        if (existingAlarm) {
            console.warn('Уже присутствует звонок на это же время');
        }

        //добавление звонка
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        });
    }

    removeClock(time) {
        //удаление звонка
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        //время нн:мм
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }


    start() {

        if (this.intervalId) {
            return;
        }

        //интервал
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();

            //перебираем звонки
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }

    stop() {
        //останавоиваем интервал
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        //типа сброс
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        //остановка всего
        this.stop();
        this.alarmCollection = [];
    }
}
