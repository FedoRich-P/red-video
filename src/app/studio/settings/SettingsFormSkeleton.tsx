export function SettingsFormSkeleton() {
    return (
        <section
            className="w-3/5 animate-pulse space-y-8"
            aria-busy="true"
            aria-labelledby="settings-skeleton-title"
        >
            <h2 id="settings-skeleton-title" className="sr-only">
                Loading settings form...
            </h2>

            <ul className="space-y-6" aria-hidden="true">
                {Array.from({length: 5}).map((_, i) => (
                    <li key={i} className="space-y-2">
                        <div className="h-4 w-24 bg-zinc-300 rounded"/>
                        <div className="h-10 bg-zinc-200 rounded-md"/>
                    </li>
                ))}
            </ul>


            <div className="text-center mt-4">
                <span className="mx-auto h-10 w-40 rounded-md bg-zinc-300"/>
            </div>
        </section>
    )
}
