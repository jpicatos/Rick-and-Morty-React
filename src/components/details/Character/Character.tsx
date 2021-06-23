import React, { useEffect, useState } from 'react'
import { Character as CharacterModel } from '../../../models/character';
import { characters as charactersService } from "../../../services/rickAndMorty";

const Character: React.FC<{ id: number }> = ({id}) => {
    const [characterInfo, setCharacterInfo] = useState<CharacterModel>()
    useEffect(() => {
        const fetchCharacters = async () => {
          try {
            const response: CharacterModel = await charactersService.getSome([id]);
            setCharacterInfo(response);
            console.log(response);
          } catch (err) {
            console.error(err);
          }
        };
        fetchCharacters();
      }, []);
    
    return (
        <React.Fragment>
            <ul>
                <li>Id: {characterInfo?.id}</li>
                <li>Name: {characterInfo?.name}</li>
                <li>Status: {characterInfo?.status}</li>
                <li>Species: {characterInfo?.species}</li>
                <li>Type: {characterInfo?.type}</li>
                <li>Gender: {characterInfo?.gender}</li>
                <li>Origin: <a href={characterInfo?.origin.url}>{characterInfo?.origin.name}</a></li>
                <li>Location: <a href={characterInfo?.location.url}>{characterInfo?.location.name}</a></li>
                <li>Image: <img src={characterInfo?.image}/></li>
                <li>Url: <a href={characterInfo?.url}>{characterInfo?.url}</a></li>
                <li>Created: {characterInfo?.created}</li>
                <li>
                    Episodes ({characterInfo?.episode.length}):
                    <ul>
                        {characterInfo?.episode.map((ep, i )=> {
                            return <li key={i}><a href={ep}>{ep}</a></li>
                        })}
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Character
