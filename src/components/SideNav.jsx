import { useContext } from "react";
import { categories } from "../utils/Constants";
import { YoutubeContext } from "../context/YoutubeContext";

const SideNav = () => {
    // context yapısına abone olma
    const { selectedCategory, setSelectedCategory } =
        useContext(YoutubeContext);

    return (
        <nav className="flex flex-col p-2">
            {categories.map((item, i) => (
                <div
                    // seçilen kategoriyi context'e gönderme
                    key={i}
                    onClick={() => setSelectedCategory(item)}>
                    
                    <div className={`
                    ${selectedCategory.name === item.name && 'bg-[#2d2d2d]'}
                    flex items-center gap-2 p-2 py-4 text-md cursor-pointer transition hover:bg-[#2d2d2d] rounded-md`}>
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                    {/* objenin divider değeri true ise ekrana çizgi bas */}
                    {item.divider && <hr />}
                </div>
            ))}
        </nav>
    );
};

export default SideNav;