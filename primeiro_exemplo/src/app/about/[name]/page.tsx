type Props = {
  params: {
    name: string;
  }
}

export default function About({ params }: Props) {
  return (
    <div>
      <h1>Página Sobre {params.name}</h1>
    </div>
  )
}
