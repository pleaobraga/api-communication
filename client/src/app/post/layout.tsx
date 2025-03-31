export default function PostLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col gap-4 mx-auto max-w-4xl mt-2.5 mb-10 p-4">
      {children}
    </main>
  )
}
