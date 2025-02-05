
export const Error = ({children} : {children: React.ReactNode}) => {
  return (
    <p className="text-center my-4 bg-red-600 p-3 uppercase font-bold text-white ">{children}</p>
  )
}
