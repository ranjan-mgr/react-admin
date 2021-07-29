import {
  AdminIcon,
  DriverIcon,
  RiderIcon,
  RidesIcon,
  RidePatternIcon,
  RideSearchLogIcon,
  RouteIcon,
  SuggestedRouteIcon,
  StopIcon,
  CityIcon,
  TimezoneIcon,
  BusIcon,
  TicketsIcon,
  InternalOperatorIcon,
  ApiTokenIcon,
  ActivityIcon,
  PassengerAppIcon,
  DriverAppIcon,
  InspectorAppIcon,
} from "../../../assets/icons/icon";

export const navOptions = [
  // {
  //   group: "ADMIN",
  //   resource: [
  //     {
  //       icon: AdminIcon,
  //       name: "Admin",
  //       route: "/admin",
  //     },
  //   ],
  // },
  // {
  //   group: "USERS",
  //   resource: [
  //     {
  //       icon: DriverIcon,
  //       name: "Driver",
  //       route: "/driver",
  //     },
  //     {
  //       icon: RiderIcon,
  //       name: "Rider",
  //       route: "/rider",
  //     },
  //   ],
  // },
  // {
  //   group: "TRIPS",
  //   resource: [
  //     {
  //       icon: RidesIcon,
  //       name: "Rides",
  //       route: "/rides",
  //     },
  //     {
  //       icon: RidePatternIcon,
  //       name: "Rides Patterns",
  //       route: "/ridePattern",
  //     },
  //     {
  //       icon: RideSearchLogIcon,
  //       name: "Rides Search Log",
  //       route: "/rideSearchLog",
  //     },
  //     {
  //       icon: RouteIcon,
  //       name: "Route",
  //       route: "/route",
  //     },
  //     {
  //       icon: SuggestedRouteIcon,
  //       name: "Suggested Route",
  //       route: "/suggestedRoute",
  //     },
  //     {
  //       icon: StopIcon,
  //       name: "Stop",
  //       route: "/stop",
  //     },
  //     {
  //       icon: CityIcon,
  //       name: "City",
  //       route: "/city",
  //     },
  //     {
  //       icon: TimezoneIcon,
  //       name: "Time Zone",
  //       route: "/timezone",
  //     },
  //     {
  //       icon: BusIcon,
  //       name: "Bus",
  //       route: "/bus",
  //     },
  //     {
  //       icon: TicketsIcon,
  //       name: "Ticket",
  //       route: "/ticket",
  //     },
  //   ],
  // },
  // {
  //   group: "OTHER",
  //   resource: [
  //     {
  //       icon: InternalOperatorIcon,
  //       name: "Internal Operator",
  //       route: "/internalOperator",
  //     },
  //     {
  //       icon: ApiTokenIcon,
  //       name: "API Token",
  //       route: "/apiToken",
  //     },
  //     {
  //       icon: ActivityIcon,
  //       name: "Activity",
  //       route: "/activity",
  //     },
  //   ],
  // },
  {
    group: "CUSTOMIZE",
    resource: [
      {
        icon: PassengerAppIcon,
        name: "Passenger App",
        route: "/passenger-home",
      },
      {
        icon: DriverAppIcon,
        name: "Driver App",
        route: "/driver-home",
      },
      {
        icon: InspectorAppIcon,
        name: "Inspector App",
        route: "/inspector-home",
      },
    ],
  },
];
