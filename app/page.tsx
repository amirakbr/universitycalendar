'use client';
import { Vazirmatn } from 'next/font/google';
const VazirFont = Vazirmatn({ subsets: ['arabic'] });
let starterPoint = new Date('2024-09-22T01:00:00.000Z').getTime();
let todayDate = new Date().getTime();
let diffDaysPerMSec = new Date(todayDate - starterPoint).getTime();
let weekType = Math.ceil(diffDaysPerMSec / (1000 * 60 * 60 * 24) / 7) % 2 === 1 ? 'فرد' : 'زوج';

export default function Home() {
  const Data = [
    {
      dayTime: 'شنبه',
      timeSlotsArray: [
        {
          title: 'مدیریت پروژه',
          isEveryOtherWeek: '',
        },
        null,
        {
          title: 'آز مدار الکتریکی',
          isEveryOtherWeek: '',
        },
        null,
        {
          title: 'ریزپردازنده',
          isEveryOtherWeek: '',
        },
        null,
        null,
      ],
    },
    {
      dayTime: 'یکشنبه',
      timeSlotsArray: [
        {
          title: 'معادلات دیفرانسیل',
          isEveryOtherWeek: '',
        },
        {
          title: 'معادلات دیفرانسیل',
          isEveryOtherWeek: 'فرد',
        },
        null,
        null,
        null,
        {
          title: 'مباحث ویژه',
          isEveryOtherWeek: '',
        },
        null,
      ],
    },
    {
      dayTime: 'دو شنبه',
      timeSlotsArray: [
        {
          title: 'محاسبات عددی',
          isEveryOtherWeek: '',
        },
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      dayTime: 'سه شنبه',
      timeSlotsArray: [
        null,
        null,
        null,
        null,
        {
          title: 'هوش محاسباتی',
          isEveryOtherWeek: 'زوج',
        },
        {
          title: 'هوش محاسباتی',
          isEveryOtherWeek: '',
        },
        null,
      ],
    },
    {
      dayTime: 'چهار شنبه',
      timeSlotsArray: [
        null,
        null,
        null,
        {
          title: 'ریزپردازنده',
          isEveryOtherWeek: 'فرد',
        },
        {
          title: 'آز ریزپردازنده',
          isEveryOtherWeek: '',
        },
        null,
        null,
      ],
    },
    {
      dayTime: 'پنج شنبه',
      timeSlotsArray: [null, null, null, null, null, null],
    },
    {
      dayTime: 'جمعه',
      timeSlotsArray: [
        {
          title: 'کلپچ یه بناگوش دو تا زبون + پیاز',
          isEveryOtherWeek: 'offDay',
        },
        {
          title: 'خواب بعد کلپچ',
          isEveryOtherWeek: 'offDay',
        },
        {
          title: 'استراحت بعد کلپچ',
          isEveryOtherWeek: 'offDay',
        },
        {
          title: 'مطالعه از روی roadmap.sh',
          isEveryOtherWeek: 'offDay',
        },
        {
          title: 'مطالعه از روی roadmap.sh',
          isEveryOtherWeek: 'offDay',
        },
        {
          title: 'گاهی جلسات adplist و گاهی کتاب',
          isEveryOtherWeek: 'offDay',
        },
        {
          title: 'مطالعه کتاب',
          isEveryOtherWeek: 'offDay',
        },
      ],
    },
  ];

  const PersianWeekDayArray = [' یک شنبه ', ' دو شنبه ', ' سه شنبه ', ' چهار شنبه ', ' پنج شنبه ', ' جمعه ', ' شنبه '];
  return (
    <div className={`flex flex-col gap-2 px-2 ${VazirFont.className}`}>
      <h1 className="text-xl">برنامه هفتگی دانشگاهی اینجانب</h1>
      <p className="text-sm">
        لازم به ذکر است که تمامی کار های طراحی و پیاده سازی این برنامه در ساعاتی که بنده هیچ تسکی نداشتم انجام شده است . جهت اطلاع امروز{' '}
        {PersianWeekDayArray[new Date().getDay()]} - {new Date().toLocaleDateString('fa-IR')} هستش و من کلاس{' '}
        <span className="text-lg font-medium border-b-2 border-b-black">
          {new Date().getDay() === 3 || new Date().getDay() === 5 ? 'ندارم ' : ' دارم '}
        </span>
        <span>تا به الان {Math.ceil(diffDaysPerMSec / (1000 * 60 * 60 * 24) / 7)} هفته آموزشی را گذرانیده ام</span>
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
          <p className="font-medium text-center border rounded p-2 flex items-center justify-center bg-slate-300">ایام هفته</p>
          <p className="font-medium text-center border rounded p-2 flex items-center justify-center bg-slate-300">
            ساعات کاری اینجانب 🤳🐱‍👤🐱‍👓🐱‍🐉🐱‍💻🐱‍🚀🙄👨‍🏫
          </p>
        </div>
        <div className="flex flex-col gap-6">
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
      <p className="text-sm">این برنامه هفتگی هیچ کاربردی ندارد و صرفا بابت مطلع کردن خودم و همکارانم ساخته شده است</p>
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
      <p className="font-medium text-center border rounded p-2 flex items-center justify-center bg-slate-300">{item.dayTime}</p>
      <DayTimeHoursContainer timeSlotsArray={item.timeSlotsArray} />
    </div>
  );
};

const DayTimeHoursContainer = ({ timeSlotsArray }: { timeSlotsArray?: { title: string; isEveryOtherWeek: string }[] | any }) => {
  const timeSlotsHours = [8, 10, 12, 14, 16, 18, 20, 21];
  return (
    <div className="grid grid-cols-7 gap-2">
      {timeSlotsArray &&
        timeSlotsArray.map((item: any, id: number) => (
          <div
            className={`font-medium text-center border rounded p-2 w-full gap-2 grid grid-cols-1 relative grid-rows-[1fr_2px_1fr_2px_1fr] ${
              item?.title ? 'bg-red-200' : 'bg-green-200'
            } ${
              item?.isEveryOtherWeek === 'practice' || item?.isEveryOtherWeek === 'offDay'
                ? 'practice'
                : item?.isEveryOtherWeek
                ? 'bg-yellow-200'
                : null
            }`}
          >
            <p>
              {Number(timeSlotsHours[id]).toLocaleString('fa-IR')} - {Number(timeSlotsHours[id + 1]).toLocaleString('fa-IR')}
            </p>
            <hr className="border-t w-full" />
            <p>{item?.title ?? 'شرکت تشریف دارم'}</p>
            <hr className="border-t w-full" />
            {item?.isEveryOtherWeek === weekType && (
              <p className="text-sm absolute bottom-[95%] bg-green-900 text-white w-full left-0 rounded">این هفته این کلاس رو میرم</p>
            )}
            {item?.isEveryOtherWeek ? (
              <span className="text-sm">
                {item?.isEveryOtherWeek === 'practice' || item?.isEveryOtherWeek === 'offDay'
                  ? 'هر هفته 😍😎'
                  : `فقط هفته های ${item.isEveryOtherWeek}`}
              </span>
            ) : item?.title ? (
              <span className="text-sm">متاسفانه باید هر هفته برم</span> ?? ''
            ) : (
              <span className="text-sm">در محل شرکت حضور دارم</span>
            )}
          </div>
        ))}
    </div>
  );
};
