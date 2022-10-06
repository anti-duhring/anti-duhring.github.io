import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {
    const langOptions = {
        "pt": 0,
        "en": 1
    }
    const [language,setLanguage] = useState(langOptions.pt)
    const title = ['Meu nome é Mateus. Sou um programador full-stack freelancer e estudante de direito', "Hi, I'm Mateus, a freelancer full-stack programmer and brazillian law student"]
    const aboutMe = {
        title: ['Um pouco sobre mim...', 'More about me...'],
        body: ['Meu nome é Mateus Vinícius de Lima, sou de Recife - PE, tenho 23 anos, estudante de Direito na Universidade Federal de Pernambuco. Apaixonado por programação desde a adolescência, agora procuro me aventurar na área de tecnologia em busca da possibilidade de materializar ideias e soluções. Trabalhei em escritórios de advocacia desde 2017, trago uma boa bagagem jurídica, experiências de trabalho em equipe e contato com cliente que certamente serão úteis. \n\n Trabalho como programador freelancer desde o início de 2022, com foco em web apps, mobile apps, REST APIs e bots de automação.', "My name is Mateus Vinícius de Lima, I'm a 23 years old brazillian law student at Universidade Federal de Pernambuco. I love programming since as a teenager, now I'm looking for new adventures in the IT career to build my own ideas and solutions. I worked to lawyers since 2017, so I bring some law knowledge and a lot experience with teamwork which will definitely be useful. \n\n I've worked as a freelancer programmer since early 2020's, building web apps, mobile apps, REST APIs and automation bots."]
    }
    const skills = {
        title: ['Habilidades', 'Skills'],
        others: ['Outros', 'Also'],
        softSkill1: ['Trabalho em equipe', 'Teamwork'],
        softSkill2: ['Sempre aprendendo', 'Always studying'],
        softSkill3: ['Capacidade de resolver problemas por conta própria', 'Ability to solve problems on my own']
    }
    const projects = {
        title: ['Projetos e Experiências', 'Projects and Works']
    }

    return (
        <LanguageContext.Provider value={{
            language, 
            setLanguage,
            title,
            aboutMe,
            projects,
            skills
        }}>
            {children}
        </LanguageContext.Provider>
    )
}