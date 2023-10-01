import { Vazirmatn } from "next/font/google";
const VazirFont = Vazirmatn({ subsets: ["arabic"] });
let StarterPointDate = new Date("2023-09-22T23:59:59.000Z").getTime();
let TodayPointDate = new Date().getTime();
let weekType =
  Math.ceil((TodayPointDate - StarterPointDate) / (1000 * 3600 * 24) / 7) %
    2 ===
  1
    ? "فرد"
    : "زوج";
export default function Home() {
  const Data = [
    {
      dayTime: "شنبه",
      timeSlotsArray: [
        {
          title: "دیفرانسیل",
          isEveryOtherWeek: "",
        },
        {
          title: "دیفرانسیل",
          isEveryOtherWeek: "زوج",
        },
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      dayTime: "یکشنبه",
      timeSlotsArray: [
        {
          title: "اخلاق کاربردی بردمش ساعت 8 صب",
          isEveryOtherWeek: "",
        },
        null,
        null,
        null,
        {
          title: "ریاضی 2",
          isEveryOtherWeek: "",
        },
        {
          title: "ریاضی 2",
          isEveryOtherWeek: "زوج",
        },
        null,
      ],
    },
    {
      dayTime: "دو شنبه",
      timeSlotsArray: [
        null,
        null,
        null,
        null,
        {
          title: "ریزپردازنده",
          isEveryOtherWeek: "",
        },
        {
          title: "ریزپردازنده",
          isEveryOtherWeek: "زوج",
        },
        null,
      ],
    },
    {
      dayTime: "سه شنبه",
      timeSlotsArray: [
        null,
        null,
        {
          title: "فیزیک دو",
          isEveryOtherWeek: "",
        },
        {
          title: "فیزیک دو",
          isEveryOtherWeek: "فرد",
        },
        null,
        null,
        null,
      ],
    },
    {
      dayTime: "چهار شنبه",
      timeSlotsArray: [null, null, null, null, null, null, null],
    },
    {
      dayTime: "پنج شنبه",
      timeSlotsArray: [
        {
          title: "نظریه زبان",
          isEveryOtherWeek: "",
        },
        {
          title: "نظریه زبان",
          isEveryOtherWeek: "زوج",
        },
        null,
        null,
        {
          title: "ساختمان داده",
          isEveryOtherWeek: "",
        },
        {
          title: "ساختمان داده",
          isEveryOtherWeek: "زوج",
        },
        null,
      ],
    },
    {
      dayTime: "جمعه",
      timeSlotsArray: [null, null, null, null, null, null, null],
    },
  ];

  const PersianWeekDayArray = [
    " یک شنبه ",
    " دو شنبه ",
    " سه شنبه ",
    " چهار شنبه ",
    " پنج شنبه ",
    " جمعه ",
    " شنبه ",
  ];
  return (
    <div className={`flex flex-col gap-2 px-2 ${VazirFont.className}`}>
      <h1 className="text-xl">برنامه هفتگی دانشگاهی اینجانب</h1>
      <p className="text-sm">
        لازم به ذکر است که تمامی کار های طراحی و پیاده سازی این برنامه در ساعاتی
        که بنده هیچ تسکی نداشتم انجام شده است . جهت اطلاع امروز{" "}
        {PersianWeekDayArray[new Date().getDay()]} -{" "}
        {new Date().toLocaleDateString("fa-IR")} هستش و من کلاس{" "}
        <span className="text-lg font-medium border-b-2 border-b-black">
          {new Date().getDay() === 3 || new Date().getDay() === 5
            ? "ندارم"
            : "دارم"}
        </span>
      </p>
      <span>این هفته ، هفته ی {weekType} میباشد</span>
      <div className="flex items-center gap-4">
        <div className="text-lg">راهنما :</div>
        <div className="flex gap-2 items-center">
          <span className="p-2 bg-green-200 rounded-full"></span>
          <p>در این ساعات در شرکت حضور دارم</p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="p-2 bg-yellow-200 rounded-full"></span>
          <p>در این ساعات به صورت هفته در میان در شرکت حضور دارم</p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="p-2 bg-red-200 rounded-full"></span>
          <p>در این ساعات در شرکت حضور ندارم</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[6rem_1fr] gap-2">
          <p className="font-medium text-center border rounded p-2 flex items-center justify-center bg-slate-300">
            ایام هفته
          </p>
          <p className="font-medium text-center border rounded p-2 flex items-center justify-center bg-slate-300">
            ساعات کاری اینجانب 🤳🐱‍👤🐱‍👓🐱‍🐉🐱‍💻🐱‍🚀🙄👨‍🏫
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {Data.map(
            (item: {
              dayTime: string;
              timeSlotsArray: ({
                title: string;
                isEveryOtherWeek: string;
              } | null)[];
            }) => (
              <DayTime item={item} />
            )
          )}
        </div>
      </div>
      <p className="text-sm">
        در ابتدا باید گفت این برنامه هفتگی هیچ کاربردی ندارد و صرفا بابت مطلع
        کردن خودم و همکارانم ساخته شده است
      </p>
    </div>
  );
}

const DayTime = ({
  item,
}: {
  item: {
    dayTime: string;
    timeSlotsArray?: ({
      title: string;
      isEveryOtherWeek: string;
    } | null)[];
  };
}) => {
  return (
    <div className="grid grid-cols-[6rem_1fr] gap-2">
      <p className="font-medium text-center border rounded p-2 flex items-center justify-center bg-slate-300">
        {item.dayTime}
      </p>
      <DayTimeHoursContainer timeSlotsArray={item.timeSlotsArray} />
    </div>
  );
};

const DayTimeHoursContainer = ({
  timeSlotsArray,
}: {
  timeSlotsArray?: { title: string; isEveryOtherWeek: string }[] | any;
}) => {
  const timeSlotsHours = [10, 12, 14, 16, 18, 20, 22];
  return (
    <div className="grid grid-cols-7 gap-2">
      {timeSlotsArray &&
        timeSlotsArray.map((item: any, id: number) => (
          <div
            className={`font-medium text-center border rounded p-2 w-full gap-2 grid grid-cols-1 relative grid-rows-[1fr_2px_1fr_2px_1fr] ${
              item?.title ? "bg-red-200" : "bg-green-200"
            } ${item?.isEveryOtherWeek && "bg-yellow-200"}`}
          >
            <p>
              {Number(timeSlotsHours[id] - 2).toLocaleString("fa-IR")} -{" "}
              {Number(timeSlotsHours[id]).toLocaleString("fa-IR")}
            </p>
            <hr className="border-t w-full" />
            <p>{item?.title ?? "شرکت تشریف دارم"}</p>
            <hr className="border-t w-full" />
            {item?.isEveryOtherWeek === weekType && <p className="text-sm absolute bottom-[100%] bg-green-900 text-white w-full left-0 rounded">این هفته این کلاس رو میرم</p>}
            {item?.isEveryOtherWeek ? (
              <span className="text-sm">
                فقط هفته های {item.isEveryOtherWeek}
              </span>
            ) : item?.title ? (
              <span className="text-sm">متاسفانه باید هر هفته برم</span> ?? ""
            ) : (
              <span className="text-sm">در محل شرکت حضور دارم</span>
            )}
          </div>
        ))}
    </div>
  );
};
