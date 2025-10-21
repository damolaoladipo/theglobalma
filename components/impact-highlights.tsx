import { 
    Users, 
    Target, 
    Heart, 
    Award, 
    Handshake, 
    GraduationCap, 
    Mic 
} from 'lucide-react'
import { ImpactHighlightsData, ImpactHighlightsSection, ImpactHighlight } from '../_data/impact-highlights'

// Icon mapping for dynamic icon rendering
const iconMap = {
    Users,
    Target,
    Heart,
    Award,
    Handshake,
    GraduationCap,
    Mic
}

export default function ImpactHighlights() {
    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-8">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {ImpactHighlightsSection.heading}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {ImpactHighlightsSection.subheading}
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {ImpactHighlightsData.map((highlight: ImpactHighlight, _index: number) => {
                        const IconComponent = iconMap[highlight.icon as keyof typeof iconMap]
                        return (
                            <div 
                                key={highlight.id}
                                className="group relative overflow-hidden rounded-xl border bg-card/50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:bg-card/80"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                                            <IconComponent className="size-5" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {highlight.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {highlight.description}
                                    </p>
                                </div>
                                
                                {/* Subtle gradient overlay for depth */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
