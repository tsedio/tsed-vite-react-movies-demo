import {Property} from "@tsed/schema";

export class Movie {
  @Property()
  id: string;

  @Property()
  title: string;

  @Property()
  year: string;

  @Property()
  type: string;

  @Property()
  poster: string;
}
