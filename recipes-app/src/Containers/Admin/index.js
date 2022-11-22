import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";

import InfiniteScroll from "react-infinite-scroll-component";

import Container from "./styles/Container";

import { db } from "../../Firebase/firebaseConfig";
import Loading from "../../Components/Loading";
import Title from "../../Components/Title";
import CommentCard from "../../Components/Comments";
import CommentsContainer from "./styles/CommentsContainer";

const Recipes = () => {
  const [comments, setComments] = useState([]);
  const [lastComment, setLastComment] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getDocuments = async (response) => {
    const documentSnapshots = await getDocs(response);
    const documents = documentSnapshots.docs;
    const documentData = [];
    documents.forEach((doc) => {
      documentData.push(doc.data());
    });

    const lastElement = documents[documentSnapshots.docs.length - 1];
    return { documentData, lastElement };
  };

  useEffect(() => {
    const getFirstRecipes = async () => {
      setIsLoading(true);
      const first = query(collection(db, "comments"), limit(10));
      const { documentData, lastElement } = await getDocuments(first);
      setComments(documentData);
      setLastComment(lastElement);
      setIsLoading(false);
    };
    getFirstRecipes();
  }, []);

  const getNextComments = async () => {
    const next = query(
      collection(db, "comments"),
      startAfter(lastComment),
      limit(10)
    );
    const { documentData, lastElement } = await getDocuments(next);
    setComments(comments.concat(documentData));
    setLastComment(lastElement);
  };

  return (
    <Container>
      {isLoading ? (
        <Loading id="loading-icon" />
      ) : (
        <>
          <Title small>Contact comments</Title>

          <InfiniteScroll
            dataLength={comments.length}
            next={getNextComments}
            hasMore={true}
          >
            <CommentsContainer>
              {comments.map((comment) => {
                return (
                  <CommentCard
                    name={comment.name}
                    message={comment.text}
                    show={comment.attributeScores}
                    email={comment.email}
                  />
                );
              })}
            </CommentsContainer>
          </InfiniteScroll>
        </>
      )}
    </Container>
  );
};

export default Recipes;
