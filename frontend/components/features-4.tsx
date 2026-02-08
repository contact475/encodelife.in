import { Target, Users, Lightbulb, Award, Heart, TrendingUp } from 'lucide-react'

export function AboutUs() {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl space-y-12 px-6 lg:px-12 md:space-y-16">
                <div className="relative z-10 max-w-2xl space-y-4">
                    <h2 className="text-balance text-5xl font-semibold italic font-newsreader lg:text-6xl">About Us</h2>
                    <p className="text-lg text-muted-foreground">We&apos;re dedicated to building innovative solutions that empower teams and transform businesses. Our mission is to deliver excellence through cutting-edge technology and exceptional service.</p>
                </div>

                <div className="relative mx-auto grid max-w-3xl lg:max-w-5xl divide-x divide-y border *:p-14 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Target className="size-5" />
                            <h3 className="text-base font-medium">Our Mission</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">To revolutionize how businesses operate by providing innovative tools that drive growth and efficiency.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Users className="size-5" />
                            <h3 className="text-base font-medium">Our Team</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">A diverse group of passionate professionals committed to excellence and innovation.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Lightbulb className="size-5" />

                            <h3 className="text-base font-medium">Innovation</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We constantly push boundaries to create solutions that shape the future.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Award className="size-5" />

                            <h3 className="text-base font-medium">Excellence</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Quality and precision in everything we do, from design to delivery.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Heart className="size-5" />

                            <h3 className="text-base font-medium">Customer First</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Your success is our priority. We build lasting relationships through trust and support.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="size-5" />

                            <h3 className="text-base font-medium">Growth Focused</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Empowering businesses to scale and achieve their full potential.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}