export default interface ICallsRepository {
  rate(origin: string, destination: string): Promise<number | undefined>;
}
