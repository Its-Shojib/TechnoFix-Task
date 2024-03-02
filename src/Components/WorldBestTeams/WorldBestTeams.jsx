import img1 from '../../assets/WorldBestTeams/Mask_group.png.jpg'
import img2 from '../../assets/WorldBestTeams/Jane-Docusign-Testimonials_2x.png.jpg'
import img3 from '../../assets/WorldBestTeams/Mask_group-1.png.jpg'

const WorldBestTeams = () => {
    return (
        <div className="w-full md:w-10/12 mx-auto my-20">
            <div>
                <h1 className="text-center text-[#050038] font-bold text-4xl">{`Loved by the world's best teams`}</h1>
                <p className="text-[#4262FF] px-4 py-2 rounded-full border border-blue-600 max-w-[230px] mx-auto my-5 font-semibold">See all customer stories →</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-10">
                <div className="space-y-5">
                    <h1 className="text-[#050038] text-4xl">
                        <span className="font-bold">Vm</span>ware</h1>
                    <p className="pb-7">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the with collaboration, whiteboarding, and retrospectives while remote.”</p>
                    <div className="flex justify-start items-center gap-5 ">
                        <img src={img3} alt="" />
                        <div className="text-sm">
                            <p className="font-semibold">Roxanne Mustafa</p>
                            <p>Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <h1 className="text-[#050038] text-4xl font-bold">DocuSign</h1>
                    <p className="pb-20">“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
                    <div className="flex justify-start items-center gap-5 ">
                        <img src={img2} alt="" />
                        <div className="text-sm">
                            <p className="font-semibold">Jane Ashley</p>
                            <p>Head of Design at DocuSign</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <h1 className="text-[#050038] text-4xl font-bold">frog</h1>
                    <p className="pb-12">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                    <div className="flex justify-start items-center gap-5 ">
                        <img src={img1} alt="" />
                        <div className="text-sm">
                            <p className="font-semibold">Laura Baird</p>
                            <p>Associate Design Director at frog</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorldBestTeams;