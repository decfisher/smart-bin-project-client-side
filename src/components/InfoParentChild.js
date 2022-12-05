export default function InfoParentChild({ title, text }) {
    return (
        <>
            <section className="info-pair">
                <h1>{title}</h1>
                <p>{text}</p>
            </section>
        </>
    )
}