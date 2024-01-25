import { Party } from '../../assets'

export default function UpcomingEvents() {
  return (
    <div className="w-[58vw] ml-[3%]">
    <h2 className="text-md font-medium text-[#333]">Upcoming events</h2>
    <div className="w-full py-12">
      <div className="flex justify-center items-center gap-3 mt-24 flex-col">
        <div>
          <img src={Party} alt="" />
        </div>
        <p className="text-center">No upcoming events</p>
      </div>
    </div>
  </div>
  )
}
