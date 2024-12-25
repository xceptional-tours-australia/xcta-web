import Banner from "@/components/Banner/Banner"
import "./style.css"
import { teams } from "@/lib/dummyData"
import OurCommitmentSection from "@/components/OurCommitmentSection/OurCommitmentSection"
import { getOurTeams } from "@/lib/strapi"

export const metadata = {
  title: "Our Team",
}

export default async function OurTeam() {
  const ourTeams = await getOurTeams()

  return (
    <main className="ourteam">
      <Banner />

      <section className="section-wrapper">
        <div className="ourteam__cards">
          {ourTeams.map((team: any, i : any) => (
            <div className="ourteam__card" key={i}>
              <div className="ourteam__head">
                <span className="ourteam__title">{ team.name }</span>
                <span className="ourteam__subtitle">{ team.position }</span>
              </div>

              <div className="ourteam__body">
                <p>{ team.information }</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <OurCommitmentSection />
    </main>
  )
}

// export default OurTeam