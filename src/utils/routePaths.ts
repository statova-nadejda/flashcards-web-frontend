export const routePaths = {
  Index: "/",
  Login: "/login",
  StudentPage: "/student-page",
  StudentCardSet: "/student-card-set",
  Register: "/register",
  StudentLibrarySets: "/library-sets",
  CardSetGroups: "/library-sets/card-set-groups/:tag",
  getCardSetGroup: (tag: string) =>
    `/library-sets/card-set-groups/${encodeURIComponent(tag)}`,
  CardSetInfo: "/library-sets/card-set-info/:setId",
  getCardSetInfo: (setId: number | string) =>
    `/library-sets/card-set-info/${setId}`,
  CreateUpdateCardSet: "/card-set-groups/create-update-card-set",
  StudyCardSet: "/study-card-set",
};
