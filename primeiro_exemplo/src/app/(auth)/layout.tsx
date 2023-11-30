
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <h2>Área de autenticação</h2>
        <hr />
        <div>
            {children}
        </div>
    </div>
  )
}
