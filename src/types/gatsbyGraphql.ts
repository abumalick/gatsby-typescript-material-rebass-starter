export type Maybe<T> = T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type TBooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>
  readonly ne: Maybe<Scalars['Boolean']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
}

export type TDateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>
  readonly ne: Maybe<Scalars['Date']>
  readonly gt: Maybe<Scalars['Date']>
  readonly gte: Maybe<Scalars['Date']>
  readonly lt: Maybe<Scalars['Date']>
  readonly lte: Maybe<Scalars['Date']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
}

export type TDirectory = TNode & {
  __typename?: 'Directory'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly sourceInstanceName: Maybe<Scalars['String']>
  readonly absolutePath: Maybe<Scalars['String']>
  readonly relativePath: Maybe<Scalars['String']>
  readonly extension: Maybe<Scalars['String']>
  readonly size: Maybe<Scalars['Int']>
  readonly prettySize: Maybe<Scalars['String']>
  readonly modifiedTime: Maybe<Scalars['Date']>
  readonly accessTime: Maybe<Scalars['Date']>
  readonly changeTime: Maybe<Scalars['Date']>
  readonly birthTime: Maybe<Scalars['Date']>
  readonly root: Maybe<Scalars['String']>
  readonly dir: Maybe<Scalars['String']>
  readonly base: Maybe<Scalars['String']>
  readonly ext: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly relativeDirectory: Maybe<Scalars['String']>
  readonly dev: Maybe<Scalars['Int']>
  readonly mode: Maybe<Scalars['Int']>
  readonly nlink: Maybe<Scalars['Int']>
  readonly uid: Maybe<Scalars['Int']>
  readonly gid: Maybe<Scalars['Int']>
  readonly rdev: Maybe<Scalars['Int']>
  readonly blksize: Maybe<Scalars['Int']>
  readonly ino: Maybe<Scalars['Int']>
  readonly blocks: Maybe<Scalars['Int']>
  readonly atimeMs: Maybe<Scalars['Float']>
  readonly mtimeMs: Maybe<Scalars['Float']>
  readonly ctimeMs: Maybe<Scalars['Float']>
  readonly birthtimeMs: Maybe<Scalars['Float']>
  readonly atime: Maybe<Scalars['Date']>
  readonly mtime: Maybe<Scalars['Date']>
  readonly ctime: Maybe<Scalars['Date']>
  readonly birthtime: Maybe<Scalars['Date']>
}

export type TDirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryBirthtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryConnection = {
  __typename?: 'DirectoryConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TDirectoryEdge>
  readonly nodes: ReadonlyArray<TDirectory>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TDirectoryGroupConnection>
}

export type TDirectoryConnectionDistinctArgs = {
  field: TDirectoryFieldsEnum
}

export type TDirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TDirectoryFieldsEnum
}

export type TDirectoryEdge = {
  __typename?: 'DirectoryEdge'
  readonly next: Maybe<TDirectory>
  readonly node: TDirectory
  readonly previous: Maybe<TDirectory>
}

export enum TDirectoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export type TDirectoryFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly sourceInstanceName: Maybe<TStringQueryOperatorInput>
  readonly absolutePath: Maybe<TStringQueryOperatorInput>
  readonly relativePath: Maybe<TStringQueryOperatorInput>
  readonly extension: Maybe<TStringQueryOperatorInput>
  readonly size: Maybe<TIntQueryOperatorInput>
  readonly prettySize: Maybe<TStringQueryOperatorInput>
  readonly modifiedTime: Maybe<TDateQueryOperatorInput>
  readonly accessTime: Maybe<TDateQueryOperatorInput>
  readonly changeTime: Maybe<TDateQueryOperatorInput>
  readonly birthTime: Maybe<TDateQueryOperatorInput>
  readonly root: Maybe<TStringQueryOperatorInput>
  readonly dir: Maybe<TStringQueryOperatorInput>
  readonly base: Maybe<TStringQueryOperatorInput>
  readonly ext: Maybe<TStringQueryOperatorInput>
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly relativeDirectory: Maybe<TStringQueryOperatorInput>
  readonly dev: Maybe<TIntQueryOperatorInput>
  readonly mode: Maybe<TIntQueryOperatorInput>
  readonly nlink: Maybe<TIntQueryOperatorInput>
  readonly uid: Maybe<TIntQueryOperatorInput>
  readonly gid: Maybe<TIntQueryOperatorInput>
  readonly rdev: Maybe<TIntQueryOperatorInput>
  readonly blksize: Maybe<TIntQueryOperatorInput>
  readonly ino: Maybe<TIntQueryOperatorInput>
  readonly blocks: Maybe<TIntQueryOperatorInput>
  readonly atimeMs: Maybe<TFloatQueryOperatorInput>
  readonly mtimeMs: Maybe<TFloatQueryOperatorInput>
  readonly ctimeMs: Maybe<TFloatQueryOperatorInput>
  readonly birthtimeMs: Maybe<TFloatQueryOperatorInput>
  readonly atime: Maybe<TDateQueryOperatorInput>
  readonly mtime: Maybe<TDateQueryOperatorInput>
  readonly ctime: Maybe<TDateQueryOperatorInput>
  readonly birthtime: Maybe<TDateQueryOperatorInput>
}

export type TDirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TDirectoryEdge>
  readonly nodes: ReadonlyArray<TDirectory>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TDirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TDirectoryFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export type TDuotoneGradient = {
  readonly highlight: Maybe<Scalars['String']>
  readonly shadow: Maybe<Scalars['String']>
  readonly opacity: Maybe<Scalars['Int']>
}

export type TFile = TNode & {
  __typename?: 'File'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly sourceInstanceName: Maybe<Scalars['String']>
  readonly absolutePath: Maybe<Scalars['String']>
  readonly relativePath: Maybe<Scalars['String']>
  readonly extension: Maybe<Scalars['String']>
  readonly size: Maybe<Scalars['Int']>
  readonly prettySize: Maybe<Scalars['String']>
  readonly modifiedTime: Maybe<Scalars['Date']>
  readonly accessTime: Maybe<Scalars['Date']>
  readonly changeTime: Maybe<Scalars['Date']>
  readonly birthTime: Maybe<Scalars['Date']>
  readonly root: Maybe<Scalars['String']>
  readonly dir: Maybe<Scalars['String']>
  readonly base: Maybe<Scalars['String']>
  readonly ext: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly relativeDirectory: Maybe<Scalars['String']>
  readonly dev: Maybe<Scalars['Int']>
  readonly mode: Maybe<Scalars['Int']>
  readonly nlink: Maybe<Scalars['Int']>
  readonly uid: Maybe<Scalars['Int']>
  readonly gid: Maybe<Scalars['Int']>
  readonly rdev: Maybe<Scalars['Int']>
  readonly blksize: Maybe<Scalars['Int']>
  readonly ino: Maybe<Scalars['Int']>
  readonly blocks: Maybe<Scalars['Int']>
  readonly atimeMs: Maybe<Scalars['Float']>
  readonly mtimeMs: Maybe<Scalars['Float']>
  readonly ctimeMs: Maybe<Scalars['Float']>
  readonly birthtimeMs: Maybe<Scalars['Float']>
  readonly atime: Maybe<Scalars['Date']>
  readonly mtime: Maybe<Scalars['Date']>
  readonly ctime: Maybe<Scalars['Date']>
  readonly birthtime: Maybe<Scalars['Date']>
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>
  readonly childImageSharp: Maybe<TImageSharp>
}

export type TFileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileAtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileMtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileCtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileBirthtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileConnection = {
  __typename?: 'FileConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TFileEdge>
  readonly nodes: ReadonlyArray<TFile>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TFileGroupConnection>
}

export type TFileConnectionDistinctArgs = {
  field: TFileFieldsEnum
}

export type TFileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TFileFieldsEnum
}

export type TFileEdge = {
  __typename?: 'FileEdge'
  readonly next: Maybe<TFile>
  readonly node: TFile
  readonly previous: Maybe<TFile>
}

export enum TFileFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL',
}

export type TFileFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly sourceInstanceName: Maybe<TStringQueryOperatorInput>
  readonly absolutePath: Maybe<TStringQueryOperatorInput>
  readonly relativePath: Maybe<TStringQueryOperatorInput>
  readonly extension: Maybe<TStringQueryOperatorInput>
  readonly size: Maybe<TIntQueryOperatorInput>
  readonly prettySize: Maybe<TStringQueryOperatorInput>
  readonly modifiedTime: Maybe<TDateQueryOperatorInput>
  readonly accessTime: Maybe<TDateQueryOperatorInput>
  readonly changeTime: Maybe<TDateQueryOperatorInput>
  readonly birthTime: Maybe<TDateQueryOperatorInput>
  readonly root: Maybe<TStringQueryOperatorInput>
  readonly dir: Maybe<TStringQueryOperatorInput>
  readonly base: Maybe<TStringQueryOperatorInput>
  readonly ext: Maybe<TStringQueryOperatorInput>
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly relativeDirectory: Maybe<TStringQueryOperatorInput>
  readonly dev: Maybe<TIntQueryOperatorInput>
  readonly mode: Maybe<TIntQueryOperatorInput>
  readonly nlink: Maybe<TIntQueryOperatorInput>
  readonly uid: Maybe<TIntQueryOperatorInput>
  readonly gid: Maybe<TIntQueryOperatorInput>
  readonly rdev: Maybe<TIntQueryOperatorInput>
  readonly blksize: Maybe<TIntQueryOperatorInput>
  readonly ino: Maybe<TIntQueryOperatorInput>
  readonly blocks: Maybe<TIntQueryOperatorInput>
  readonly atimeMs: Maybe<TFloatQueryOperatorInput>
  readonly mtimeMs: Maybe<TFloatQueryOperatorInput>
  readonly ctimeMs: Maybe<TFloatQueryOperatorInput>
  readonly birthtimeMs: Maybe<TFloatQueryOperatorInput>
  readonly atime: Maybe<TDateQueryOperatorInput>
  readonly mtime: Maybe<TDateQueryOperatorInput>
  readonly ctime: Maybe<TDateQueryOperatorInput>
  readonly birthtime: Maybe<TDateQueryOperatorInput>
  readonly publicURL: Maybe<TStringQueryOperatorInput>
}

export type TFileGroupConnection = {
  __typename?: 'FileGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TFileEdge>
  readonly nodes: ReadonlyArray<TFile>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TFileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TFileFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export type TFloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>
  readonly ne: Maybe<Scalars['Float']>
  readonly gt: Maybe<Scalars['Float']>
  readonly gte: Maybe<Scalars['Float']>
  readonly lt: Maybe<Scalars['Float']>
  readonly lte: Maybe<Scalars['Float']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
}

export enum TImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum TImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
}

export enum TImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export type TImageSharp = TNode & {
  __typename?: 'ImageSharp'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly fixed: Maybe<TImageSharpFixed>
  readonly resolutions: Maybe<TImageSharpResolutions>
  readonly fluid: Maybe<TImageSharpFluid>
  readonly sizes: Maybe<TImageSharpSizes>
  readonly original: Maybe<TImageSharpOriginal>
  readonly resize: Maybe<TImageSharpResize>
}

export type TImageSharpFixedArgs = {
  width: Maybe<Scalars['Int']>
  height: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone: Maybe<TDuotoneGradient>
  traceSVG: Maybe<TPotrace>
  quality: Maybe<Scalars['Int']>
  toFormat?: Maybe<TImageFormat>
  toFormatBase64?: Maybe<TImageFormat>
  cropFocus?: Maybe<TImageCropFocus>
  fit?: Maybe<TImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type TImageSharpResolutionsArgs = {
  width: Maybe<Scalars['Int']>
  height: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone: Maybe<TDuotoneGradient>
  traceSVG: Maybe<TPotrace>
  quality: Maybe<Scalars['Int']>
  toFormat?: Maybe<TImageFormat>
  toFormatBase64?: Maybe<TImageFormat>
  cropFocus?: Maybe<TImageCropFocus>
  fit?: Maybe<TImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type TImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars['Int']>
  maxHeight: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone: Maybe<TDuotoneGradient>
  traceSVG: Maybe<TPotrace>
  quality: Maybe<Scalars['Int']>
  toFormat?: Maybe<TImageFormat>
  toFormatBase64?: Maybe<TImageFormat>
  cropFocus?: Maybe<TImageCropFocus>
  fit?: Maybe<TImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
}

export type TImageSharpSizesArgs = {
  maxWidth: Maybe<Scalars['Int']>
  maxHeight: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone: Maybe<TDuotoneGradient>
  traceSVG: Maybe<TPotrace>
  quality: Maybe<Scalars['Int']>
  toFormat?: Maybe<TImageFormat>
  toFormatBase64?: Maybe<TImageFormat>
  cropFocus?: Maybe<TImageCropFocus>
  fit?: Maybe<TImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
}

export type TImageSharpResizeArgs = {
  width: Maybe<Scalars['Int']>
  height: Maybe<Scalars['Int']>
  quality: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone: Maybe<TDuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG: Maybe<TPotrace>
  toFormat?: Maybe<TImageFormat>
  cropFocus?: Maybe<TImageCropFocus>
  fit?: Maybe<TImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type TImageSharpConnection = {
  __typename?: 'ImageSharpConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TImageSharpEdge>
  readonly nodes: ReadonlyArray<TImageSharp>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TImageSharpGroupConnection>
}

export type TImageSharpConnectionDistinctArgs = {
  field: TImageSharpFieldsEnum
}

export type TImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TImageSharpFieldsEnum
}

export type TImageSharpEdge = {
  __typename?: 'ImageSharpEdge'
  readonly next: Maybe<TImageSharp>
  readonly node: TImageSharp
  readonly previous: Maybe<TImageSharp>
}

export enum TImageSharpFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
}

export type TImageSharpFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly fixed: Maybe<TImageSharpFixedFilterInput>
  readonly resolutions: Maybe<TImageSharpResolutionsFilterInput>
  readonly fluid: Maybe<TImageSharpFluidFilterInput>
  readonly sizes: Maybe<TImageSharpSizesFilterInput>
  readonly original: Maybe<TImageSharpOriginalFilterInput>
  readonly resize: Maybe<TImageSharpResizeFilterInput>
}

export type TImageSharpFixed = {
  __typename?: 'ImageSharpFixed'
  readonly base64: Maybe<Scalars['String']>
  readonly tracedSVG: Maybe<Scalars['String']>
  readonly aspectRatio: Maybe<Scalars['Float']>
  readonly width: Maybe<Scalars['Float']>
  readonly height: Maybe<Scalars['Float']>
  readonly src: Maybe<Scalars['String']>
  readonly srcSet: Maybe<Scalars['String']>
  readonly srcWebp: Maybe<Scalars['String']>
  readonly srcSetWebp: Maybe<Scalars['String']>
  readonly originalName: Maybe<Scalars['String']>
}

export type TImageSharpFixedFilterInput = {
  readonly base64: Maybe<TStringQueryOperatorInput>
  readonly tracedSVG: Maybe<TStringQueryOperatorInput>
  readonly aspectRatio: Maybe<TFloatQueryOperatorInput>
  readonly width: Maybe<TFloatQueryOperatorInput>
  readonly height: Maybe<TFloatQueryOperatorInput>
  readonly src: Maybe<TStringQueryOperatorInput>
  readonly srcSet: Maybe<TStringQueryOperatorInput>
  readonly srcWebp: Maybe<TStringQueryOperatorInput>
  readonly srcSetWebp: Maybe<TStringQueryOperatorInput>
  readonly originalName: Maybe<TStringQueryOperatorInput>
}

export type TImageSharpFluid = {
  __typename?: 'ImageSharpFluid'
  readonly base64: Maybe<Scalars['String']>
  readonly tracedSVG: Maybe<Scalars['String']>
  readonly aspectRatio: Maybe<Scalars['Float']>
  readonly src: Maybe<Scalars['String']>
  readonly srcSet: Maybe<Scalars['String']>
  readonly srcWebp: Maybe<Scalars['String']>
  readonly srcSetWebp: Maybe<Scalars['String']>
  readonly sizes: Maybe<Scalars['String']>
  readonly originalImg: Maybe<Scalars['String']>
  readonly originalName: Maybe<Scalars['String']>
  readonly presentationWidth: Maybe<Scalars['Int']>
  readonly presentationHeight: Maybe<Scalars['Int']>
}

export type TImageSharpFluidFilterInput = {
  readonly base64: Maybe<TStringQueryOperatorInput>
  readonly tracedSVG: Maybe<TStringQueryOperatorInput>
  readonly aspectRatio: Maybe<TFloatQueryOperatorInput>
  readonly src: Maybe<TStringQueryOperatorInput>
  readonly srcSet: Maybe<TStringQueryOperatorInput>
  readonly srcWebp: Maybe<TStringQueryOperatorInput>
  readonly srcSetWebp: Maybe<TStringQueryOperatorInput>
  readonly sizes: Maybe<TStringQueryOperatorInput>
  readonly originalImg: Maybe<TStringQueryOperatorInput>
  readonly originalName: Maybe<TStringQueryOperatorInput>
  readonly presentationWidth: Maybe<TIntQueryOperatorInput>
  readonly presentationHeight: Maybe<TIntQueryOperatorInput>
}

export type TImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TImageSharpEdge>
  readonly nodes: ReadonlyArray<TImageSharp>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal'
  readonly width: Maybe<Scalars['Float']>
  readonly height: Maybe<Scalars['Float']>
  readonly src: Maybe<Scalars['String']>
}

export type TImageSharpOriginalFilterInput = {
  readonly width: Maybe<TFloatQueryOperatorInput>
  readonly height: Maybe<TFloatQueryOperatorInput>
  readonly src: Maybe<TStringQueryOperatorInput>
}

export type TImageSharpResize = {
  __typename?: 'ImageSharpResize'
  readonly src: Maybe<Scalars['String']>
  readonly tracedSVG: Maybe<Scalars['String']>
  readonly width: Maybe<Scalars['Int']>
  readonly height: Maybe<Scalars['Int']>
  readonly aspectRatio: Maybe<Scalars['Float']>
  readonly originalName: Maybe<Scalars['String']>
}

export type TImageSharpResizeFilterInput = {
  readonly src: Maybe<TStringQueryOperatorInput>
  readonly tracedSVG: Maybe<TStringQueryOperatorInput>
  readonly width: Maybe<TIntQueryOperatorInput>
  readonly height: Maybe<TIntQueryOperatorInput>
  readonly aspectRatio: Maybe<TFloatQueryOperatorInput>
  readonly originalName: Maybe<TStringQueryOperatorInput>
}

export type TImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions'
  readonly base64: Maybe<Scalars['String']>
  readonly tracedSVG: Maybe<Scalars['String']>
  readonly aspectRatio: Maybe<Scalars['Float']>
  readonly width: Maybe<Scalars['Float']>
  readonly height: Maybe<Scalars['Float']>
  readonly src: Maybe<Scalars['String']>
  readonly srcSet: Maybe<Scalars['String']>
  readonly srcWebp: Maybe<Scalars['String']>
  readonly srcSetWebp: Maybe<Scalars['String']>
  readonly originalName: Maybe<Scalars['String']>
}

export type TImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<TStringQueryOperatorInput>
  readonly tracedSVG: Maybe<TStringQueryOperatorInput>
  readonly aspectRatio: Maybe<TFloatQueryOperatorInput>
  readonly width: Maybe<TFloatQueryOperatorInput>
  readonly height: Maybe<TFloatQueryOperatorInput>
  readonly src: Maybe<TStringQueryOperatorInput>
  readonly srcSet: Maybe<TStringQueryOperatorInput>
  readonly srcWebp: Maybe<TStringQueryOperatorInput>
  readonly srcSetWebp: Maybe<TStringQueryOperatorInput>
  readonly originalName: Maybe<TStringQueryOperatorInput>
}

export type TImageSharpSizes = {
  __typename?: 'ImageSharpSizes'
  readonly base64: Maybe<Scalars['String']>
  readonly tracedSVG: Maybe<Scalars['String']>
  readonly aspectRatio: Maybe<Scalars['Float']>
  readonly src: Maybe<Scalars['String']>
  readonly srcSet: Maybe<Scalars['String']>
  readonly srcWebp: Maybe<Scalars['String']>
  readonly srcSetWebp: Maybe<Scalars['String']>
  readonly sizes: Maybe<Scalars['String']>
  readonly originalImg: Maybe<Scalars['String']>
  readonly originalName: Maybe<Scalars['String']>
  readonly presentationWidth: Maybe<Scalars['Int']>
  readonly presentationHeight: Maybe<Scalars['Int']>
}

export type TImageSharpSizesFilterInput = {
  readonly base64: Maybe<TStringQueryOperatorInput>
  readonly tracedSVG: Maybe<TStringQueryOperatorInput>
  readonly aspectRatio: Maybe<TFloatQueryOperatorInput>
  readonly src: Maybe<TStringQueryOperatorInput>
  readonly srcSet: Maybe<TStringQueryOperatorInput>
  readonly srcWebp: Maybe<TStringQueryOperatorInput>
  readonly srcSetWebp: Maybe<TStringQueryOperatorInput>
  readonly sizes: Maybe<TStringQueryOperatorInput>
  readonly originalImg: Maybe<TStringQueryOperatorInput>
  readonly originalName: Maybe<TStringQueryOperatorInput>
  readonly presentationWidth: Maybe<TIntQueryOperatorInput>
  readonly presentationHeight: Maybe<TIntQueryOperatorInput>
}

export type TImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TImageSharpFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export type TInternal = {
  __typename?: 'Internal'
  readonly content: Maybe<Scalars['String']>
  readonly contentDigest: Scalars['String']
  readonly description: Maybe<Scalars['String']>
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly ignoreType: Maybe<Scalars['Boolean']>
  readonly mediaType: Maybe<Scalars['String']>
  readonly owner: Scalars['String']
  readonly type: Scalars['String']
}

export type TInternalFilterInput = {
  readonly content: Maybe<TStringQueryOperatorInput>
  readonly contentDigest: Maybe<TStringQueryOperatorInput>
  readonly description: Maybe<TStringQueryOperatorInput>
  readonly fieldOwners: Maybe<TStringQueryOperatorInput>
  readonly ignoreType: Maybe<TBooleanQueryOperatorInput>
  readonly mediaType: Maybe<TStringQueryOperatorInput>
  readonly owner: Maybe<TStringQueryOperatorInput>
  readonly type: Maybe<TStringQueryOperatorInput>
}

export type TIntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>
  readonly ne: Maybe<Scalars['Int']>
  readonly gt: Maybe<Scalars['Int']>
  readonly gte: Maybe<Scalars['Int']>
  readonly lt: Maybe<Scalars['Int']>
  readonly lte: Maybe<Scalars['Int']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
}

/** Node Interface */
export type TNode = {
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
}

export type TNodeFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
}

export type TNodeFilterListInput = {
  readonly elemMatch: Maybe<TNodeFilterInput>
}

export type TPageInfo = {
  __typename?: 'PageInfo'
  readonly currentPage: Scalars['Int']
  readonly hasPreviousPage: Scalars['Boolean']
  readonly hasNextPage: Scalars['Boolean']
  readonly itemCount: Scalars['Int']
  readonly pageCount: Scalars['Int']
  readonly perPage: Maybe<Scalars['Int']>
}

export type TPotrace = {
  readonly turnPolicy: Maybe<TPotraceTurnPolicy>
  readonly turdSize: Maybe<Scalars['Float']>
  readonly alphaMax: Maybe<Scalars['Float']>
  readonly optCurve: Maybe<Scalars['Boolean']>
  readonly optTolerance: Maybe<Scalars['Float']>
  readonly threshold: Maybe<Scalars['Int']>
  readonly blackOnWhite: Maybe<Scalars['Boolean']>
  readonly color: Maybe<Scalars['String']>
  readonly background: Maybe<Scalars['String']>
}

export enum TPotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type TQuery = {
  __typename?: 'Query'
  readonly file: Maybe<TFile>
  readonly allFile: Maybe<TFileConnection>
  readonly sitePage: Maybe<TSitePage>
  readonly allSitePage: Maybe<TSitePageConnection>
  readonly sitePlugin: Maybe<TSitePlugin>
  readonly allSitePlugin: Maybe<TSitePluginConnection>
  readonly site: Maybe<TSite>
  readonly allSite: Maybe<TSiteConnection>
  readonly directory: Maybe<TDirectory>
  readonly allDirectory: Maybe<TDirectoryConnection>
  readonly imageSharp: Maybe<TImageSharp>
  readonly allImageSharp: Maybe<TImageSharpConnection>
}

export type TQueryFileArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  sourceInstanceName: Maybe<TStringQueryOperatorInput>
  absolutePath: Maybe<TStringQueryOperatorInput>
  relativePath: Maybe<TStringQueryOperatorInput>
  extension: Maybe<TStringQueryOperatorInput>
  size: Maybe<TIntQueryOperatorInput>
  prettySize: Maybe<TStringQueryOperatorInput>
  modifiedTime: Maybe<TDateQueryOperatorInput>
  accessTime: Maybe<TDateQueryOperatorInput>
  changeTime: Maybe<TDateQueryOperatorInput>
  birthTime: Maybe<TDateQueryOperatorInput>
  root: Maybe<TStringQueryOperatorInput>
  dir: Maybe<TStringQueryOperatorInput>
  base: Maybe<TStringQueryOperatorInput>
  ext: Maybe<TStringQueryOperatorInput>
  name: Maybe<TStringQueryOperatorInput>
  relativeDirectory: Maybe<TStringQueryOperatorInput>
  dev: Maybe<TIntQueryOperatorInput>
  mode: Maybe<TIntQueryOperatorInput>
  nlink: Maybe<TIntQueryOperatorInput>
  uid: Maybe<TIntQueryOperatorInput>
  gid: Maybe<TIntQueryOperatorInput>
  rdev: Maybe<TIntQueryOperatorInput>
  blksize: Maybe<TIntQueryOperatorInput>
  ino: Maybe<TIntQueryOperatorInput>
  blocks: Maybe<TIntQueryOperatorInput>
  atimeMs: Maybe<TFloatQueryOperatorInput>
  mtimeMs: Maybe<TFloatQueryOperatorInput>
  ctimeMs: Maybe<TFloatQueryOperatorInput>
  birthtimeMs: Maybe<TFloatQueryOperatorInput>
  atime: Maybe<TDateQueryOperatorInput>
  mtime: Maybe<TDateQueryOperatorInput>
  ctime: Maybe<TDateQueryOperatorInput>
  birthtime: Maybe<TDateQueryOperatorInput>
  publicURL: Maybe<TStringQueryOperatorInput>
}

export type TQueryAllFileArgs = {
  filter: Maybe<TFileFilterInput>
  sort: Maybe<TFileSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TQuerySitePageArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  path: Maybe<TStringQueryOperatorInput>
  internalComponentName: Maybe<TStringQueryOperatorInput>
  component: Maybe<TStringQueryOperatorInput>
  componentChunkName: Maybe<TStringQueryOperatorInput>
  isCreatedByStatefulCreatePages: Maybe<TBooleanQueryOperatorInput>
  pluginCreator: Maybe<TSitePluginFilterInput>
  pluginCreatorId: Maybe<TStringQueryOperatorInput>
  componentPath: Maybe<TStringQueryOperatorInput>
}

export type TQueryAllSitePageArgs = {
  filter: Maybe<TSitePageFilterInput>
  sort: Maybe<TSitePageSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TQuerySitePluginArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  resolve: Maybe<TStringQueryOperatorInput>
  name: Maybe<TStringQueryOperatorInput>
  version: Maybe<TStringQueryOperatorInput>
  pluginOptions: Maybe<TSitePluginPluginOptionsFilterInput>
  nodeAPIs: Maybe<TStringQueryOperatorInput>
  ssrAPIs: Maybe<TStringQueryOperatorInput>
  pluginFilepath: Maybe<TStringQueryOperatorInput>
  packageJson: Maybe<TSitePluginPackageJsonFilterInput>
}

export type TQueryAllSitePluginArgs = {
  filter: Maybe<TSitePluginFilterInput>
  sort: Maybe<TSitePluginSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TQuerySiteArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  siteMetadata: Maybe<TSiteSiteMetadataFilterInput>
  port: Maybe<TIntQueryOperatorInput>
  host: Maybe<TStringQueryOperatorInput>
  pathPrefix: Maybe<TStringQueryOperatorInput>
  polyfill: Maybe<TBooleanQueryOperatorInput>
  buildTime: Maybe<TDateQueryOperatorInput>
}

export type TQueryAllSiteArgs = {
  filter: Maybe<TSiteFilterInput>
  sort: Maybe<TSiteSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TQueryDirectoryArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  sourceInstanceName: Maybe<TStringQueryOperatorInput>
  absolutePath: Maybe<TStringQueryOperatorInput>
  relativePath: Maybe<TStringQueryOperatorInput>
  extension: Maybe<TStringQueryOperatorInput>
  size: Maybe<TIntQueryOperatorInput>
  prettySize: Maybe<TStringQueryOperatorInput>
  modifiedTime: Maybe<TDateQueryOperatorInput>
  accessTime: Maybe<TDateQueryOperatorInput>
  changeTime: Maybe<TDateQueryOperatorInput>
  birthTime: Maybe<TDateQueryOperatorInput>
  root: Maybe<TStringQueryOperatorInput>
  dir: Maybe<TStringQueryOperatorInput>
  base: Maybe<TStringQueryOperatorInput>
  ext: Maybe<TStringQueryOperatorInput>
  name: Maybe<TStringQueryOperatorInput>
  relativeDirectory: Maybe<TStringQueryOperatorInput>
  dev: Maybe<TIntQueryOperatorInput>
  mode: Maybe<TIntQueryOperatorInput>
  nlink: Maybe<TIntQueryOperatorInput>
  uid: Maybe<TIntQueryOperatorInput>
  gid: Maybe<TIntQueryOperatorInput>
  rdev: Maybe<TIntQueryOperatorInput>
  blksize: Maybe<TIntQueryOperatorInput>
  ino: Maybe<TIntQueryOperatorInput>
  blocks: Maybe<TIntQueryOperatorInput>
  atimeMs: Maybe<TFloatQueryOperatorInput>
  mtimeMs: Maybe<TFloatQueryOperatorInput>
  ctimeMs: Maybe<TFloatQueryOperatorInput>
  birthtimeMs: Maybe<TFloatQueryOperatorInput>
  atime: Maybe<TDateQueryOperatorInput>
  mtime: Maybe<TDateQueryOperatorInput>
  ctime: Maybe<TDateQueryOperatorInput>
  birthtime: Maybe<TDateQueryOperatorInput>
}

export type TQueryAllDirectoryArgs = {
  filter: Maybe<TDirectoryFilterInput>
  sort: Maybe<TDirectorySortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TQueryImageSharpArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  fixed: Maybe<TImageSharpFixedFilterInput>
  resolutions: Maybe<TImageSharpResolutionsFilterInput>
  fluid: Maybe<TImageSharpFluidFilterInput>
  sizes: Maybe<TImageSharpSizesFilterInput>
  original: Maybe<TImageSharpOriginalFilterInput>
  resize: Maybe<TImageSharpResizeFilterInput>
}

export type TQueryAllImageSharpArgs = {
  filter: Maybe<TImageSharpFilterInput>
  sort: Maybe<TImageSharpSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TSite = TNode & {
  __typename?: 'Site'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly siteMetadata: Maybe<TSiteSiteMetadata>
  readonly port: Maybe<Scalars['Int']>
  readonly host: Maybe<Scalars['String']>
  readonly pathPrefix: Maybe<Scalars['String']>
  readonly polyfill: Maybe<Scalars['Boolean']>
  readonly buildTime: Maybe<Scalars['Date']>
}

export type TSiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TSiteConnection = {
  __typename?: 'SiteConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSiteEdge>
  readonly nodes: ReadonlyArray<TSite>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TSiteGroupConnection>
}

export type TSiteConnectionDistinctArgs = {
  field: TSiteFieldsEnum
}

export type TSiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TSiteFieldsEnum
}

export type TSiteEdge = {
  __typename?: 'SiteEdge'
  readonly next: Maybe<TSite>
  readonly node: TSite
  readonly previous: Maybe<TSite>
}

export enum TSiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataCanonicalUrl = 'siteMetadata___canonicalUrl',
  SiteMetadataCompanyName = 'siteMetadata___companyName',
  SiteMetadataSiteTitle = 'siteMetadata___siteTitle',
  SiteMetadataSiteDescription = 'siteMetadata___siteDescription',
  Port = 'port',
  Host = 'host',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  BuildTime = 'buildTime',
}

export type TSiteFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly siteMetadata: Maybe<TSiteSiteMetadataFilterInput>
  readonly port: Maybe<TIntQueryOperatorInput>
  readonly host: Maybe<TStringQueryOperatorInput>
  readonly pathPrefix: Maybe<TStringQueryOperatorInput>
  readonly polyfill: Maybe<TBooleanQueryOperatorInput>
  readonly buildTime: Maybe<TDateQueryOperatorInput>
}

export type TSiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSiteEdge>
  readonly nodes: ReadonlyArray<TSite>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TSitePage = TNode & {
  __typename?: 'SitePage'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly path: Maybe<Scalars['String']>
  readonly internalComponentName: Maybe<Scalars['String']>
  readonly component: Maybe<Scalars['String']>
  readonly componentChunkName: Maybe<Scalars['String']>
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>
  readonly pluginCreator: Maybe<TSitePlugin>
  readonly pluginCreatorId: Maybe<Scalars['String']>
  readonly componentPath: Maybe<Scalars['String']>
}

export type TSitePageConnection = {
  __typename?: 'SitePageConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSitePageEdge>
  readonly nodes: ReadonlyArray<TSitePage>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TSitePageGroupConnection>
}

export type TSitePageConnectionDistinctArgs = {
  field: TSitePageFieldsEnum
}

export type TSitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TSitePageFieldsEnum
}

export type TSitePageEdge = {
  __typename?: 'SitePageEdge'
  readonly next: Maybe<TSitePage>
  readonly node: TSitePage
  readonly previous: Maybe<TSitePage>
}

export enum TSitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsIncludePaths = 'pluginCreator___pluginOptions___includePaths',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type TSitePageFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly path: Maybe<TStringQueryOperatorInput>
  readonly internalComponentName: Maybe<TStringQueryOperatorInput>
  readonly component: Maybe<TStringQueryOperatorInput>
  readonly componentChunkName: Maybe<TStringQueryOperatorInput>
  readonly isCreatedByStatefulCreatePages: Maybe<TBooleanQueryOperatorInput>
  readonly pluginCreator: Maybe<TSitePluginFilterInput>
  readonly pluginCreatorId: Maybe<TStringQueryOperatorInput>
  readonly componentPath: Maybe<TStringQueryOperatorInput>
}

export type TSitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSitePageEdge>
  readonly nodes: ReadonlyArray<TSitePage>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TSitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TSitePageFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export type TSitePlugin = TNode & {
  __typename?: 'SitePlugin'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly resolve: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
  readonly pluginOptions: Maybe<TSitePluginPluginOptions>
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly pluginFilepath: Maybe<Scalars['String']>
  readonly packageJson: Maybe<TSitePluginPackageJson>
}

export type TSitePluginConnection = {
  __typename?: 'SitePluginConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSitePluginEdge>
  readonly nodes: ReadonlyArray<TSitePlugin>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TSitePluginGroupConnection>
}

export type TSitePluginConnectionDistinctArgs = {
  field: TSitePluginFieldsEnum
}

export type TSitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TSitePluginFieldsEnum
}

export type TSitePluginEdge = {
  __typename?: 'SitePluginEdge'
  readonly next: Maybe<TSitePlugin>
  readonly node: TSitePlugin
  readonly previous: Maybe<TSitePlugin>
}

export enum TSitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsIncludePaths = 'pluginOptions___includePaths',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type TSitePluginFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly resolve: Maybe<TStringQueryOperatorInput>
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly version: Maybe<TStringQueryOperatorInput>
  readonly pluginOptions: Maybe<TSitePluginPluginOptionsFilterInput>
  readonly nodeAPIs: Maybe<TStringQueryOperatorInput>
  readonly ssrAPIs: Maybe<TStringQueryOperatorInput>
  readonly pluginFilepath: Maybe<TStringQueryOperatorInput>
  readonly packageJson: Maybe<TSitePluginPackageJsonFilterInput>
}

export type TSitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSitePluginEdge>
  readonly nodes: ReadonlyArray<TSitePlugin>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TSitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson'
  readonly name: Maybe<Scalars['String']>
  readonly description: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
  readonly main: Maybe<Scalars['String']>
  readonly author: Maybe<Scalars['String']>
  readonly license: Maybe<Scalars['String']>
  readonly dependencies: Maybe<
    ReadonlyArray<Maybe<TSitePluginPackageJsonDependencies>>
  >
  readonly devDependencies: Maybe<
    ReadonlyArray<Maybe<TSitePluginPackageJsonDevDependencies>>
  >
  readonly peerDependencies: Maybe<
    ReadonlyArray<Maybe<TSitePluginPackageJsonPeerDependencies>>
  >
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
}

export type TSitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies'
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
}

export type TSitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly version: Maybe<TStringQueryOperatorInput>
}

export type TSitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<TSitePluginPackageJsonDependenciesFilterInput>
}

export type TSitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies'
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
}

export type TSitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly version: Maybe<TStringQueryOperatorInput>
}

export type TSitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<TSitePluginPackageJsonDevDependenciesFilterInput>
}

export type TSitePluginPackageJsonFilterInput = {
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly description: Maybe<TStringQueryOperatorInput>
  readonly version: Maybe<TStringQueryOperatorInput>
  readonly main: Maybe<TStringQueryOperatorInput>
  readonly author: Maybe<TStringQueryOperatorInput>
  readonly license: Maybe<TStringQueryOperatorInput>
  readonly dependencies: Maybe<
    TSitePluginPackageJsonDependenciesFilterListInput
  >
  readonly devDependencies: Maybe<
    TSitePluginPackageJsonDevDependenciesFilterListInput
  >
  readonly peerDependencies: Maybe<
    TSitePluginPackageJsonPeerDependenciesFilterListInput
  >
  readonly keywords: Maybe<TStringQueryOperatorInput>
}

export type TSitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies'
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
}

export type TSitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly version: Maybe<TStringQueryOperatorInput>
}

export type TSitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<TSitePluginPackageJsonPeerDependenciesFilterInput>
}

export type TSitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions'
  readonly includePaths: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly path: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly short_name: Maybe<Scalars['String']>
  readonly start_url: Maybe<Scalars['String']>
  readonly background_color: Maybe<Scalars['String']>
  readonly theme_color: Maybe<Scalars['String']>
  readonly display: Maybe<Scalars['String']>
  readonly icon: Maybe<Scalars['String']>
  readonly pathCheck: Maybe<Scalars['Boolean']>
}

export type TSitePluginPluginOptionsFilterInput = {
  readonly includePaths: Maybe<TStringQueryOperatorInput>
  readonly path: Maybe<TStringQueryOperatorInput>
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly short_name: Maybe<TStringQueryOperatorInput>
  readonly start_url: Maybe<TStringQueryOperatorInput>
  readonly background_color: Maybe<TStringQueryOperatorInput>
  readonly theme_color: Maybe<TStringQueryOperatorInput>
  readonly display: Maybe<TStringQueryOperatorInput>
  readonly icon: Maybe<TStringQueryOperatorInput>
  readonly pathCheck: Maybe<TBooleanQueryOperatorInput>
}

export type TSitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TSitePluginFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export type TSiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  readonly author: Maybe<Scalars['String']>
  readonly canonicalUrl: Maybe<Scalars['String']>
  readonly companyName: Maybe<Scalars['String']>
  readonly siteTitle: Maybe<Scalars['String']>
  readonly siteDescription: Maybe<Scalars['String']>
}

export type TSiteSiteMetadataFilterInput = {
  readonly author: Maybe<TStringQueryOperatorInput>
  readonly canonicalUrl: Maybe<TStringQueryOperatorInput>
  readonly companyName: Maybe<TStringQueryOperatorInput>
  readonly siteTitle: Maybe<TStringQueryOperatorInput>
  readonly siteDescription: Maybe<TStringQueryOperatorInput>
}

export type TSiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TSiteFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export enum TSortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type TStringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>
  readonly ne: Maybe<Scalars['String']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly regex: Maybe<Scalars['String']>
  readonly glob: Maybe<Scalars['String']>
}
export type TLayoutQueryVariables = {}

export type TLayoutQuery = {readonly __typename?: 'Query'} & {
  readonly site: Maybe<
    {readonly __typename?: 'Site'} & {
      readonly siteMetadata: Maybe<
        {readonly __typename?: 'SiteSiteMetadata'} & Pick<
          TSiteSiteMetadata,
          'canonicalUrl' | 'companyName' | 'siteTitle'
        >
      >
    }
  >
}

export type TSeoQueryVariables = {}

export type TSeoQuery = {readonly __typename?: 'Query'} & {
  readonly site: Maybe<
    {readonly __typename?: 'Site'} & {
      readonly siteMetadata: Maybe<
        {readonly __typename?: 'SiteSiteMetadata'} & Pick<
          TSiteSiteMetadata,
          'siteTitle' | 'siteDescription' | 'author'
        >
      >
    }
  >
}

export type TGatsbyImageSharpFixedFragment = {
  readonly __typename?: 'ImageSharpFixed'
} & Pick<TImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>

export type TGatsbyImageSharpFixed_TracedSvgFragment = {
  readonly __typename?: 'ImageSharpFixed'
} & Pick<TImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>

export type TGatsbyImageSharpFixed_WithWebpFragment = {
  readonly __typename?: 'ImageSharpFixed'
} & Pick<
  TImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type TGatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  readonly __typename?: 'ImageSharpFixed'
} & Pick<
  TImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type TGatsbyImageSharpFixed_NoBase64Fragment = {
  readonly __typename?: 'ImageSharpFixed'
} & Pick<TImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>

export type TGatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  readonly __typename?: 'ImageSharpFixed'
} & Pick<
  TImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type TGatsbyImageSharpFluidFragment = {
  readonly __typename?: 'ImageSharpFluid'
} & Pick<
  TImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type TGatsbyImageSharpFluid_TracedSvgFragment = {
  readonly __typename?: 'ImageSharpFluid'
} & Pick<
  TImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type TGatsbyImageSharpFluid_WithWebpFragment = {
  readonly __typename?: 'ImageSharpFluid'
} & Pick<
  TImageSharpFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type TGatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  readonly __typename?: 'ImageSharpFluid'
} & Pick<
  TImageSharpFluid,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type TGatsbyImageSharpFluid_NoBase64Fragment = {
  readonly __typename?: 'ImageSharpFluid'
} & Pick<TImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type TGatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  readonly __typename?: 'ImageSharpFluid'
} & Pick<
  TImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type TGatsbyImageSharpResolutionsFragment = {
  readonly __typename?: 'ImageSharpResolutions'
} & Pick<
  TImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type TGatsbyImageSharpResolutions_TracedSvgFragment = {
  readonly __typename?: 'ImageSharpResolutions'
} & Pick<
  TImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type TGatsbyImageSharpResolutions_WithWebpFragment = {
  readonly __typename?: 'ImageSharpResolutions'
} & Pick<
  TImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type TGatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  readonly __typename?: 'ImageSharpResolutions'
} & Pick<
  TImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type TGatsbyImageSharpResolutions_NoBase64Fragment = {
  readonly __typename?: 'ImageSharpResolutions'
} & Pick<TImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>

export type TGatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  readonly __typename?: 'ImageSharpResolutions'
} & Pick<
  TImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type TGatsbyImageSharpSizesFragment = {
  readonly __typename?: 'ImageSharpSizes'
} & Pick<
  TImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type TGatsbyImageSharpSizes_TracedSvgFragment = {
  readonly __typename?: 'ImageSharpSizes'
} & Pick<
  TImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type TGatsbyImageSharpSizes_WithWebpFragment = {
  readonly __typename?: 'ImageSharpSizes'
} & Pick<
  TImageSharpSizes,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type TGatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  readonly __typename?: 'ImageSharpSizes'
} & Pick<
  TImageSharpSizes,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type TGatsbyImageSharpSizes_NoBase64Fragment = {
  readonly __typename?: 'ImageSharpSizes'
} & Pick<TImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type TGatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  readonly __typename?: 'ImageSharpSizes'
} & Pick<
  TImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>
