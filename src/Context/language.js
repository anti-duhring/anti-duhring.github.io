import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {
    const langOptions = {
        "pt": 0,
        "en": 1
    }
    const [language,setLanguage] = useState(langOptions.pt)
    const title = ['Meu nome é Mateus. Sou um desenvolvedor fullstack e estudante de direito', "Hi, I'm Mateus, a fullstack developer and brazillian law student"]
    const aboutMe = {
        title: ['Um pouco sobre mim...', 'More about me...'],
        body: ['Desenvolvedor Fullstack com experiência em React e React Native com TypeScript, e também com Python usando Flask, Java usando Spring Boot e Node usando Express na construção de API Restfuls, bem como AWS e Azure Cloud pra montagem e manutenção de infraestrutura. Estudante de Direito na Universidade Federal de Pernambuco. 24 anos.', "Fullstack developer woking with React and React Native using TypeScript, and also experience in Python with Flask, Java with Spring Boot and Node with Express building Restul APIs. AWS and Azure Cloud user for infrastructure assembly and maintenance. Law student at the Federal University of Pernambuco. 24 years."]
    }
    const skills = {
        title: ['Habilidades', 'Skills'],
        others: ['Outros', 'Also'],
        softSkill1: ['Trabalho em equipe', 'Teamwork'],
        softSkill2: ['Sempre aprendendo', 'Always learning'],
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