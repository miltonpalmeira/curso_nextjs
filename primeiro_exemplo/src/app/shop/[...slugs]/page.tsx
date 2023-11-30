type Props = {
  params: {
    slugs: string[];
  }
}

export default function Shop({ params }: Props) {
  return (
    <div>
      FILTROS: {params.slugs.join(', ')}
    </div>
  )
}

