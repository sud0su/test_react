const getInitialName = (name) => {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
    let initials = [...name.matchAll(rgx)] || [];

    initials = (
        (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase();

    return initials;
}

const getRandomName = () => {
    var nameList = ["Ade Juwita",
        "Ade Namnung",
        "Bang Adetao",
        "Aden Bajaj",
        "Adi Bing Slamet",
        "Aditya Warman",
        "Adul",
        "Agus Kuprit",
        "Akbar",
        "Akri Patrio",
        "Ali Zainal Abidin",
        "Aming Sugandi",
        "Ananda Omesh",
        "Ananto SQL",
        "Andre Taulany",
        "Anya Dwinov",
        "Aom Kusman",
        "Arie Untung",
        "Arwah Setiawan",
        "Arbain -Asmuni",
        "Asti Ananta",
        "Ateng",
        "Mpok Atik",
        "Atmonadi",
        "Aziz Gagap",
        "Ayu Dewi",
        "Andhika Pratama",
        "Andovi da Lopez",
        "Arie Kriting",
        "Ayu Ting Ting",
        "Darto Helm",
        "Daan Aria",
        "Dalijo",
        "Darsono",
        "Daryadi",
        "Daus Mini",
        "Deby Sahertian",
        "Dimas Danang",
        "Denny Cagur",
        "Denny Chandra",
        "Desy Genoveva",
        "Dewo PLO",
        "Dibyo",
        "Dicky Chandra",
        "Didi Petet",
        "Didik Mangkuprojo",
        "Didik Nini Thowok",
        "Didin (Bagito)",
        "Didu",
        "Cak Dikin",
        "Diran",
        "Djudjuk (Srimulat)",
        "Djuki (Dagelan Mataram)",
        "Donny (Enggal Waras)",
        "Dono (Warkop)",
        "Dorman Borisman",
        "Doyok",
        "Dorce Gamalama",
        "Dudung",
        "Deddy Mahendra Desta",
        "Daus Separo",
        "Derry Sudarisman",
        "Derry Drajat",
        "Deswita Maharani"];

    const getName = nameList[Math.floor(Math.random() * nameList.length)];
    return getName;
}

export { getInitialName, getRandomName };