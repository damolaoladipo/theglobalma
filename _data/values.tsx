import { LucideIcon } from 'lucide-react'

export interface ValueSectionConfig {
    heading: string
    subheading: string
}

export interface Value {
    id: string
    title: string
    description: string
    icon: string
}

export const ValueSectionData: ValueSectionConfig = {
    heading: "Our Mission and Vision",
    subheading: "What drives our work and the outcomes we strive to achieve."
}

export const ValuesData: Value[] = [
    {
        id: "vision",
        title: "Vision",
        description: "To be a catalyst for innovative change, empowering people and communities to thrive through purpose-driven initiatives.",
        icon: "Target"
    },
    {
        id: "mission",
        title: "Mission",
        description: "We connect ideas, people, and opportunities—designing programs, mentorship, and partnerships that translate potential into measurable impact.",
        icon: "Handshake"
    },
    {
        id: "core-values",
        title: "Core Values",
        description: "Integrity, Collaboration, Inclusion, Excellence, and Impact—guiding every relationship, decision, and outcome.",
        icon: "Heart"
    },
    {
        id: "goals",
        title: "Goals",
        description: "Scale programs, deepen community engagement, and build sustainable ecosystems that unlock growth for newcomers and entrepreneurs.",
        icon: "Target"
    }
]