export const FinishedStatus = {
  TERMINATED: 0,
  COMPLETED: 1,
};

export default {
  activeTrip: {
    name: 'Jan trip 1',
    stations: [
      { location: 'SINGAPORE', arrivalDate: '6/8/2019', showMark: false },
      { location: 'LONDON, UK', arrivalDate: '6/8/2019', showMark: true },
    ],
    state: 1,
    totalPrice: 'S$33',
  },
  pastTrips: [
    {
      name: 'DEC TRIP 1 xcvcxvxcvxcvsv edfsvxcvxcbxvb cb xvbvcbvcbvxbvcxbvcb', startDate: '31/12/2016', endDate: '01/01/2017', finishedStatus: 0, totalPrice: 'S$25',
    },
    {
      name: 'DEC TRIP 2', startDate: '31/12/2016', endDate: '01/01/2017', finishedStatus: 1, totalPrice: 'S$26',
    },
  ],
};
