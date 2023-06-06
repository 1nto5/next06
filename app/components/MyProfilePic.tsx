import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <section className="mx-auto w-full">
      <Image
        className="mx-auto mt-8 rounded-full border-4 border-slate-500 shadow-black drop-shadow-xl"
        src="/images/profile.jpeg"
        width={200}
        height={200}
        alt="Adrian Antosiak"
        priority={true}
      />
    </section>
  )
}
