import React, { useMemo } from 'react';
import moment, { Moment } from 'moment';
import { useCalendarStore } from '@/store/weekly-calendar';

import { Box } from '../ui/box';
import { Button, ButtonIcon, ButtonText } from '../ui/button';
import { Card } from '../ui/card';
import { ChevronLeftIcon, ChevronRightIcon } from '../ui/icon';
import { Text } from '../ui/text';

export const WeeklyCalendar = () => {
  const { activeDate, currentDate, currentWeek, navigateWeek, setActiveDate } = useCalendarStore();

  const getStartOfWeek = (date: Moment) => date.clone().startOf('isoWeek');
  const getEndOfWeek = (date: Moment) => date.clone().endOf('isoWeek');

  const navTitle = useMemo(() => {
    const startOfWeek = getStartOfWeek(currentDate);
    const endOfWeek = getEndOfWeek(currentDate);

    const previousMonth = startOfWeek.format('MMM');
    const currentMonth = endOfWeek.format('MMM');
    const year = endOfWeek.format('YYYY');

    if (startOfWeek.isSame(endOfWeek, 'month')) {
      return `${currentMonth} ${year}`;
    }

    return `${previousMonth} - ${currentMonth} ${year}`;
  }, [currentDate]);

  const allowNextNavigation = currentDate.isBefore(moment(), 'isoWeek');

  return (
    <Card variant="ghost" className="gap-5 px-0">
      <Box className={styles.navContainer}>
        <Button variant="ghost" className={`p-2`} onPress={() => navigateWeek('prev')}>
          <ButtonIcon as={ChevronLeftIcon} />
        </Button>

        <Text className="font-semibold">{navTitle}</Text>

        <Button
          variant="ghost"
          className={`p-2`}
          onPress={() => navigateWeek('next')}
          disabled={!allowNextNavigation}>
          <ButtonIcon as={ChevronRightIcon} className={!allowNextNavigation ? 'opacity-40' : ''} />
        </Button>
      </Box>

      <Box className={styles.navContainer}>
        {currentWeek.map((date, index) => {
          const isToday = date.isSame(moment(), 'day');
          const isFuture = date.isAfter(moment(), 'day');
          const isActive = date.isSame(activeDate, 'day');

          return (
            <Button
              key={index}
              action="default"
              onPress={() => setActiveDate(date)}
              className={
                styles.weekDayButton +
                ` ${isFuture ? 'opacity-40' : ''}` +
                ` ${isActive ? 'bg-indigo-900/50' : ''}`
              }
              disabled={isFuture}>
              <ButtonText
                className={`${isActive ? 'text-background-light' : 'text-typography-700'}`}>
                {date.format('ddd')}
              </ButtonText>

              <Box
                className={
                  styles.dateContainer +
                  ` ${isFuture ? 'bg-background-700 dark:bg-background-100' : ''}` +
                  ` ${isToday ? 'border-4 border-indigo-500' : ''}`
                }>
                <ButtonText
                  className={`text-sm ${isActive || isFuture ? 'text-background-light' : 'text-typography-700'}`}>
                  {date.format('DD')}
                </ButtonText>
              </Box>
            </Button>
          );
        })}
      </Box>
    </Card>
  );
};

const styles = {
  navContainer: 'flex-row items-center justify-between',
  weekDayButton: 'flex-col items-center m-0 gap-2 px-2 py-3 rounded-xl',
  dateContainer: 'h-10 w-10 items-center justify-center rounded-full',
  weekDayButtonText: 'text-sm font-semibold',
};
